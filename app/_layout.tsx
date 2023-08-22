import React from "react";
import { Slot, router } from "expo-router";
import useDeviceId from "@/hooks/use-device-id";
import AuthProvider from "@/providers/auth";
import SafeAreaProvider from "@/providers/safe-area";
import { Provider } from "react-redux";
import store from "@/store";
import Providers from "@/providers";
import GlobalSnackBar from "@/components/snack-bar/global-snack-bar";
import "react-native-gesture-handler";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import storage from "@/hooks/lib/storage";

const min = 1000 * 20;
const RootLayout = () => {
  const state = useDeviceId();
  // Generate a unique device id
  // if (state.deviceId) console.log("IMEI", state.deviceId);

  const [tapCount, setTapCount] = React.useState(0);

  const tap = Gesture.Tap().onStart(() => {
    setTapCount(tapCount + 1);
  });

  const logOutUser = React.useCallback(async () => {
    console.log("tapCount", tapCount);
    // await storage.deleteLocalData("user");
    if (await storage.getLocalData("user")) {
      router.push("/auth/enter-pin");
    }
  }, [tapCount]);

  useDebouncedEffect(
    () => {
      console.log("tapCount", tapCount);
      logOutUser();
    },
    [tapCount],
    min
  );

  return (
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
  );
};
export default RootLayout;

const useDebouncedEffect = (effect, deps, delay) => {
  React.useEffect(() => {
    const handler = setTimeout(() => effect(), delay);

    return () => clearTimeout(handler);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [...(deps || []), delay]);
};
