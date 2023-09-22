import React from 'react';
import useAppDispatch from './use-dispatch';
import useAppSelector from './use-selector';
import productSlilce from '../slices/product';
import { ProductTypes } from '@/typings/product';
import {
  OrderMetaContext,
  keyGeneratorState,
} from '@/providers/context/order-meta';

const { actions } = productSlilce;

/**
 * A Hook for product
 * @returns
 */

const useProduct = () => {
  const dispatch = useAppDispatch();
  const state = useAppSelector((state) => state.product);
  const [, set] = React.useContext(OrderMetaContext);

  /**
   * @description Update products
   */
  const updateProducts = React.useCallback((items: ProductTypes[]) => {
    dispatch(actions.updateProducts(items));
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

  const updateItemActive = React.useCallback(
    (parentId: string, itemId: string, value: boolean) => {
      const act = actions.onItemActive({
        parentId,
        itemId,
        value,
      });
      dispatch(act);
    },
    []
  );

  const onReset = React.useCallback(() => {
    const act = actions.onReset();
    set(keyGeneratorState);
    dispatch(act);
  }, []);
  const onUpdatePurchaseBreakdown = React.useCallback((payload: any) => {
    const act = actions.onUpdatePurchaseBreakdown(payload);
    set(keyGeneratorState);
    dispatch(act);
  }, []);

  const onPriceHidden = React.useCallback((payload: boolean) => {
    const act = actions.onPriceHidden(payload);
    dispatch(act);
  }, []);
  const onChangeTotal = React.useCallback((payload: number) => {
    const act = actions.onChangeTotal(payload);
    dispatch(act);
  }, []);

  return {
    state,
    updateProducts,
    updateCurrentID,
    updateItemIncrement,
    updateItemDecrement,
    onUpdatePurchaseBreakdown,
    onReset,
    updateItemActive,
    onPriceHidden,
    onChangeTotal,
  };
};

export default useProduct;
