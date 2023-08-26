import { ToastAndroid } from 'react-native';

const toast = {
  show: (message: string) => {
    ToastAndroid.show(message, ToastAndroid.SHORT);
  },
};

export default toast;
