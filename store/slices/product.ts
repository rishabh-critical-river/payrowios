import { createSlice } from '@reduxjs/toolkit';

type Action = {
  key: {
    parentId: string;
    itemId: string;
  };
  payload: any;
};

const productSlilce = createSlice({
  name: 'Products',
  initialState: {
    items: [],
    total: 0,
  },
  reducers: {
    updateProducts: (state, action) => {
      return (state = action.payload);
    },
    onPressCategoryItem: (state, action) => {},
    onPressItemIncrement: (state, action: Action) => {
      if (state) {
        const { itemId, parentId } = action.key;
        state.forEach((currentItem) => {
          if (currentItem.id === parentId) {
            const innerItem = currentItem.serviceItems.find(
              (currentItem) => currentItem.id === itemId
            );
            if (innerItem) {
              innerItem.quantity += 1;
            }
          }
        });
      }
    },
    onPressItemDecrement: (state, action) => {},
  },
});

export default productSlilce;
