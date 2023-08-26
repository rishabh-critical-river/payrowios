import React from 'react';
import storage from '@/hooks/lib/storage';
import jwtActions from '@/hooks/lib/jwt-actions';

type State<K extends string, S extends null> = {
  [key in K]: S;
};

const { getLocalData } = storage;

/**
 * A hook to fetch data from local storage of expo
 * @returns
 */
function useStorageData<k extends string>(
  key: k,
  options?: { decode: boolean }
) {
  const safeRef = React.useRef<boolean>(false);
  // @ts-expect-error
  const [state, setState] = React.useState<State<k>>({ [key]: null });

  const fetch = React.useCallback(async () => {
    const persisted = await getLocalData(key);
    if (persisted !== null) {
      const payload = {
        [key]: JSON.parse(persisted),
      };
      if (options?.decode) {
        setState({
          [key]: jwtActions.decode(persisted),
        });
      } else {
        setState(payload);
      }
    }
  }, [key]);

  React.useEffect(() => {
    safeRef.current = true;
    if (safeRef.current) {
      fetch();
    }
    return () => {
      safeRef.current = false;
    };
  }, [key]);

  return state;
}

export default useStorageData;
