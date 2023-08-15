import empty from '@/hooks/lib/empty';
import { ProductTypes } from '@/typings/product';
import { createSlice } from '@reduxjs/toolkit';

type Action = {
  payload: {
    parentId: string;
    itemId: string;
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
};

const initialState = {
  total: 0,
  items: [],
  currentID: empty,
  purchaseBreakdown: {
    service: [],
  },
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
        state.total = items.reduce(
          (acc, curr) =>
            acc +
            curr.serviceItems.reduce((acc, curr) => acc + curr.quantity, 0),
          0
        );
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
        state.total = items.reduce(
          (acc, curr) =>
            acc +
            curr.serviceItems.reduce((acc, curr) => acc + curr.quantity, 0),
          0
        );
      }
    },
  },
});

export default productSlilce;
