import React from 'react';
import storage from '@/lib/storage';

type State<K extends string, S extends null> = {
  [key in K]: S;
};

const { getLocalData } = storage;

/**
 * A hook to fetch data from local storage of expo
 * @returns
 */
function useStorageData<k extends string>(key: k) {
  const safeRef = React.useRef<boolean>(false);
  // @ts-expect-error
  const [state, setState] = React.useState<State<k>>({ [key]: null });

  const fetch = React.useCallback(async () => {
    const persisted = await getLocalData(key);
    if (persisted !== null) {
      const payload = {
        [key]: JSON.parse(persisted),
      };
      setState(payload);
    }
  }, [key]);

  React.useEffect(() => {
    safeRef.current = true;
    if (safeRef.current) {
      void fetch();
    }
    return () => {
      safeRef.current = false;
    };
  }, []);

  return state;
}

export default useStorageData;
