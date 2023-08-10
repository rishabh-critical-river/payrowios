import React from 'react';
import useStorageData from './use-storage-data';
import getProducts from '../queries/product/get-product';

const useProduct = () => {
  const [state, setState] = React.useState<any>(null);
  const [loading, setLoading] = React.useState(false);
  const safeRef = React.useRef<boolean>(false);
  const { user } = useStorageData('user');
  //   console.log(user?.token);
  // console.log(user?.token);

  const fetchProducts = React.useCallback(async () => {
    setLoading(true);
    if (user?.token) {
      try {
        const response = await getProducts(user?.token);
        setState(response.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    }
  }, [user?.token]);

  React.useEffect(() => {
    safeRef.current = true;
    if (safeRef.current) {
      void fetchProducts();
    }
    return () => {
      safeRef.current = false;
    };
  }, []);

  const merge = {
    data: state,
    loading,
  };

  return merge;
};

export default useProduct;
