import * as SecureStore from 'expo-secure-store';

// console.log('uuid', uuid);
/**
 * A device ID generator that uses Expo's SecureStore to persist the ID.
 * @see https://docs.expo.io/versions/latest/sdk/securestore/
 * @description
 * This is a simple wrapper around Expo's SecureStore that generates a random
 * ID and persists it to the device. If the ID already exists, it will be
 * returned instead of generating a new one.
 * @example
 * ```tsx
 * // Import the methods.
 * import deviceIDMethods from '@/lib/device-id';
 * // Destructure the methods.
 * const { getDeviceId, setDeviceId, deleteDeviceId, resetDeviceId } = deviceIDMethods;
 * // Get the device ID.
 * const id = await getDeviceId();
 *
 * // Set the device ID.
 * await setDeviceId();
 *
 * // Delete the device ID.
 * await deleteDeviceId();
 *
 * // Reset the device ID.
 * await resetDeviceId();
 * ```
 */

const storage = {
  getLocalData: async (key: string) => {
    let fetchUUID = await SecureStore.getItemAsync(key);
    return fetchUUID;
  },
  setLocalData: async (key: string, data: string) => {
    await SecureStore.setItemAsync(key, data);
  },
  deleteLocalData: async (key: string) => {
    await SecureStore.deleteItemAsync(key);
  },
};

export default storage;
