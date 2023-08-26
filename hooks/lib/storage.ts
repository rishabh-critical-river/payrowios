import * as SecureStore from 'expo-secure-store';

/**
 * A device ID generator that uses Expo's SecureStore to persist the ID.
 * @see https://docs.expo.io/versions/latest/sdk/securestore/
 * @description
 * This is a simple wrapper around Expo's SecureStore that generates a random
 * ID and persists it to the device. If the ID already exists, it will be
 */

const storage = {
  getLocalData: async (key: string) => {
    const _data = await SecureStore.getItemAsync(key);
    return _data;
  },
  setLocalData: async (key: string, data: string) => {
    await SecureStore.setItemAsync(key, data);
  },
  deleteLocalData: async (key: string) => {
    await SecureStore.deleteItemAsync(key);
  },
};

export default storage;
