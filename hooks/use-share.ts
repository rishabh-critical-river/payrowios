import React from 'react';
import { Linking } from 'react-native';

const useShare = () => {
  const opneWhatsapp = React.useCallback(
    async (mobileNumber: string, text: string) => {
      const url = `https://wa.me/${mobileNumber}?text=${text}`;
      await Linking.canOpenURL(url).then((supported) => {
        if (supported) {
          return Linking.openURL(url);
        } else {
          return Linking.openURL(
            `https://api.whatsapp.com/send?phone=${mobileNumber}&text=${text}`
          );
        }
      });
    },
    []
  );
  return {
    opneWhatsapp,
  };
};

export default useShare;
