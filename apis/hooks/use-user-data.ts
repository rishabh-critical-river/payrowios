import React from 'react';
import storage from '@/lib/storage';

type State = {
  user: string | null;
};

const { getLocalData } = storage;

/**
 * A hook that returns the device id
 * @returns
 */
const useUserToken = () => {
  const _ref = React.useRef<boolean>(false);
  const [state, setState] = React.useState<State>({
    user: null,
  });

  const fetch = React.useCallback(async () => {
    const user = await getLocalData('user');
    if (user) {
      const payload = {
        user,
      };
      setState(payload);
    }
  }, []);

  React.useEffect(() => {
    _ref.current = true;
    if (_ref.current) {
      void fetch();
    }
    return () => {
      _ref.current = false;
    };
  }, []);

  return state;
};

export default useUserToken;
