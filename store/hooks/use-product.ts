import React from 'react';
import useAppDispatch from './use-dispatch';
import useAppSelector from './use-selector';
import productSlilce from '../slices/product';
import { ItemTypes, ProductTypes } from '@/typings/product';

const { actions } = productSlilce;

/**
 * A Hook for product
 * @returns
 */

const useProduct = () => {
  const dispatch = useAppDispatch();
  const state = useAppSelector((state) => state.product);

  /**
   * @description Update products
   */
  const updateProducts = React.useCallback((items: ProductTypes[]) => {
    dispatch(actions.updateProducts(items));
  }, []);
  /**
   * @description Update products
   */
  const onSelectItems = React.useCallback((items: ItemTypes) => {
    console.log(items);
    dispatch(actions.onSelectItems(items));
  }, []);

  /**
   * @description Update current id
   */
  const updateCurrentID = React.useCallback((id: string) => {
    dispatch(actions.updateCurrentID(id));
  }, []);
  /**
   * @description Update item increment
   */
  const updateItemIncrement = React.useCallback(
    (parentId: string, itemId: string) => {
      const act = actions.onItemIncrement({
        parentId,
        itemId,
      });
      dispatch(act);
    },
    []
  );
  /**
   * @description Update item decrement
   */
  const updateItemDecrement = React.useCallback(
    (parentId: string, itemId: string) => {
      const act = actions.onItemDecrement({
        parentId,
        itemId,
      });
      dispatch(act);
    },
    []
  );

  console.log(state?.selectedItems);
  return {
    state,
    onSelectItems,
    updateProducts,
    updateCurrentID,
    updateItemIncrement,
    updateItemDecrement,
  };
};

export default useProduct;
