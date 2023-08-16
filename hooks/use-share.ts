import React from 'react';
import { Linking } from 'react-native';

const useShare = () => {
  /**
   * Open whatsapp with mobile number and text
   */
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
  /**
   * Send email
   */
  const sendEmail = React.useCallback(
    async (email: string, subject: string, body: string) => {
      const url = `mailto:${email}?subject=${subject}&body=${body}`;
      await Linking.canOpenURL(url).then((supported) => {
        if (supported) {
          return Linking.openURL(url);
        } else {
          return Linking.openURL(
            `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${subject}&body=${body}`
          );
        }
      });
    },
    []
  );

  return {
    opneWhatsapp,
    sendEmail,
  };
};

export default useShare;
