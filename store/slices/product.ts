import empty from '@/hooks/lib/empty';
import { ProductTypes } from '@/typings/product';
import { createSlice } from '@reduxjs/toolkit';

type Action = {
  payload: {
    parentId: string;
    itemId: string;
    value?: boolean;
  };
  type: string;
};
type Service = {
  _id: string;
  serviceCode: string;
  serviceCat: string;
  englishName: string;
  arabicName: string;
  quantity: number;
  transactionAmount: number;
  totalAmount: number;
};

type State = {
  items: ProductTypes[];
  total: number;
  currentID?: string;
  purchaseBreakdown: {
    service: Service[];
  };
  priceHidden: boolean;
};

const initialState = {
  total: 0,
  items: [],
  currentID: empty,
  purchaseBreakdown: {
    service: [],
  },
  priceHidden: true,
} as State;

const productSlilce = createSlice({
  name: 'Products',
  initialState,
  reducers: {
    updateProducts: (state, action) => {
      state.items = action.payload;
    },
    updateCurrentID: (state, action) => {
      if (state.currentID !== action.payload) {
        state.currentID = action.payload;
      } else {
        state.currentID = empty;
      }
    },
    onItemIncrement: (state: State, action: Action) => {
      const { items } = state;
      if (items) {
        const { itemId, parentId } = action.payload;

        items.forEach((currentItem) => {
          if (currentItem._id === parentId) {
            const innerItem = currentItem.serviceItems.find(
              (currentItem) => currentItem._id === itemId
            );
            if (innerItem) {
              innerItem.quantity += 1;
            }
            if (innerItem?._id === itemId) {
              const payloadWithQuantity = {
                _id: innerItem._id,
                serviceCat: currentItem.serviceName,
                serviceCode: currentItem.serviceCode,
                englishName: innerItem.itemName,
                totalAmount: innerItem.quantity,
                quantity: innerItem.quantity,
                transactionAmount: innerItem.price * innerItem.quantity,
              } as Service;
              // state.purchaseBreakdown.service.push(payloadWithQuantity);
              const findItem = state.purchaseBreakdown.service.find(
                (selectedItem) => selectedItem?._id === innerItem._id
              );
              if (findItem?._id === innerItem._id) {
                findItem.quantity += 1;
              } else {
                state.purchaseBreakdown.service.push(payloadWithQuantity);
              }
            }
          }
        });
        // For total
        state.total = total(items);
      }
    },
    onItemDecrement: (state: State, action: Action) => {
      const { items } = state;
      if (items) {
        const { itemId, parentId } = action.payload;
        items.forEach((currentItem) => {
          if (currentItem._id === parentId) {
            const innerItem = currentItem.serviceItems.find(
              (currentItem) => currentItem._id === itemId
            );
            if (innerItem) {
              if (innerItem.quantity > 0) {
                innerItem.quantity -= 1;
              }
              if (innerItem.quantity === 0) {
                const index = state.purchaseBreakdown.service.findIndex(
                  (item) => item._id === innerItem._id
                );
                state.purchaseBreakdown.service.splice(index, 1);
              }
              if (innerItem?._id === itemId) {
                const findItem = state.purchaseBreakdown.service.find(
                  (selectedItem) => selectedItem?._id === innerItem._id
                );
                if (findItem?._id === innerItem._id) {
                  findItem.quantity -= 1;
                }
              }
            }
          }
        });
        // For total
        state.total = total(items);
      }
    },
    onItemActive: (state: State, action: Action) => {
      const { items } = state;
      if (items) {
        const { itemId, parentId, value } = action.payload;
        items.forEach((currentItem) => {
          if (currentItem._id === parentId) {
            const innerItem = currentItem.serviceItems.find(
              (currentItem) => currentItem._id === itemId
            );
            if (innerItem) {
              innerItem.selected = value;
            }
          }
        });
        // For total
        state.total = total(items);
      }
    },
    onReset: (state) => {
      state.total = 0;
      state.items = [];
      state.currentID = empty;
      state.purchaseBreakdown = {
        service: [],
      };
    },
    onUpdatePurchaseBreakdown: (state, action) => {
      state.purchaseBreakdown.service = action.payload;
      state.total = action.payload.reduce(
        (acc, curr) => acc + curr.transactionAmount,
        0
      );
    },
    onPriceHidden: (state, action) => {
      state.priceHidden = action.payload;
    },
    onChangeTotal: (state, action) => {
      state.total = action.payload;
    },
  },
});

export default productSlilce;

/**
 * Total amount of all items
 * @param items
 * @returns
 */
const total = (items: ProductTypes[]) => {
  return items.reduce(
    (acc, curr) =>
      acc +
      curr.serviceItems.reduce(
        (acc, curr) => acc + curr.price * curr.quantity,
        0
      ),
    0
  );
};
