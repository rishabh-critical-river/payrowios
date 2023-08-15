import React from 'react';
import deviceIDMethods from '@/hooks/lib/device-id';

type State = {
  deviceId: string | null;
};

const { setDeviceId, getDeviceId } = deviceIDMethods;

/**
 * A hook that returns the device id
 * @returns
 */
const useDeviceId = () => {
  const _ref = React.useRef<boolean>(false);
  const [state, setState] = React.useState<State>({
    deviceId: null,
  });

  const fetch = React.useCallback(async () => {
    const id = await getDeviceId();

    if (id === null) {
      await setDeviceId();
    }
    if (id) {
      const payload = {
        deviceId: await getDeviceId(),
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

export default useDeviceId;
