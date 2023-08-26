import React from 'react';
import { Slot, router } from 'expo-router';
import useDeviceId from '@/hooks/use-device-id';
import AuthProvider from '@/providers/auth';
import SafeAreaProvider from '@/providers/safe-area';
import { Provider } from 'react-redux';
import store from '@/store';
import Providers from '@/providers';
import GlobalSnackBar from '@/components/snack-bar/global-snack-bar';
import 'react-native-gesture-handler';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import storage from '@/hooks/lib/storage';
import { RootSiblingParent } from 'react-native-root-siblings';

const min = 5 * 60 * 1000;
const RootLayout = () => {
  const state = useDeviceId();
  // Generate a unique device id
  if (state.deviceId) console.log('IMEI', state.deviceId);

  const [tapCount, setTapCount] = React.useState(0);

  const tap = Gesture.Tap().onStart((b) => {
    setTapCount(tapCount + 1);
    console.log(b.numberOfPointers);
  });

  const logOutUser = React.useCallback(async () => {
    if (await storage.getLocalData('user')) {
      router.push('/auth/enter-pin');
    }
  }, [tapCount]);

  useDebouncedEffect(
    () => {
      console.log('tapCount', tapCount);
      logOutUser();
    },
    [tapCount],
    min
  );

  return (
    <RootSiblingParent>
      <GestureDetector gesture={tap}>
        <Provider store={store}>
          <Providers>
            <SafeAreaProvider>
              <AuthProvider>
                <Slot />
              </AuthProvider>
              <GlobalSnackBar />
            </SafeAreaProvider>
          </Providers>
        </Provider>
      </GestureDetector>
    </RootSiblingParent>
  );
};
export default RootLayout;

const useDebouncedEffect = (
  effect: { (): void; (): void },
  deps: any[],
  delay: number
) => {
  React.useEffect(() => {
    const handler = setTimeout(() => effect(), delay);

    return () => clearTimeout(handler);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [...(deps || []), delay]);
};
