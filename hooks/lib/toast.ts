import { Platform, ToastAndroid } from 'react-native';
import Toast from 'react-native-root-toast';

const ios = Platform.OS === 'ios';
/**
 * Toast for both Android and iOS
 */
const toast = {
  show: (message: string) => {
    if (ios) {
      Toast.show(message, {
        duration: Toast.durations.SHORT,
      });
    } else {
      ToastAndroid.show(message, ToastAndroid.SHORT);
    }
  },
};

export default toast;
