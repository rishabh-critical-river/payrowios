import useAppDispatch from './use-dispatch';
import useAppSelector from './use-selector';
import productSlilce from '../slices/product';

const useProduct = () => {
  const product = useAppSelector((state) => state.product);
  const dispatch = useAppDispatch();

  return {
    product,
  };
};

export default useProduct;
