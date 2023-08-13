import empty from '@/lib/empty';
import { ProductTypes } from '@/typings/product';
import { createSlice } from '@reduxjs/toolkit';

type Action = {
  payload: {
    parentId: string;
    itemId: string;
  };
  type: string;
};

type State = {
  items: ProductTypes[];
  total: number;
  selectedItems?: ProductTypes[];
  currentID?: string;
};

const initialState = {
  total: 0,
  items: [],
  selectedItems: [],
  currentID: empty,
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
    onSelectItems: (state, action) => {
      state.selectedItems?.push(action.payload);
      // const draft = state.selectedItems;
      // if (draft) {
      //   const item = action.payload;
      //   const findItem = draft?.find(
      //     (selectedItem) => selectedItem._id === item.id
      //   );
      //   if (findItem) {
      //     if (findItem?._id === item.id) {
      //       // draft.splice(draft.indexOf(findItem), 1);
      //     } else {
      //       draft.push(item);
      //     }
      //   }
      // }
      // state.selectedItems = action.payload;
    },
    // onCategoryItem: (state, action) => {

    // },
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
