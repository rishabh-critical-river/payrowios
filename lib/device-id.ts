import * as SecureStore from 'expo-secure-store';
import 'react-native-get-random-values';
import { customAlphabet } from 'nanoid';

const ikey = 'device_id';
const characters = Array.from({ length: 10 }, (_, i) => i).join('');

const generator = customAlphabet(characters, 10);
let uuid = generator();

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

const deviceIDMethods = {
  getDeviceId: async () => {
    let fetchUUID = await SecureStore.getItemAsync(ikey);
    return fetchUUID;
  },
  setDeviceId: async () => {
    await SecureStore.setItemAsync(ikey, uuid);
  },
  deleteDeviceId: async () => {
    await SecureStore.deleteItemAsync(ikey);
  },
  resetDeviceId: async () => {
    await SecureStore.deleteItemAsync(ikey);
    uuid = generator();
    await SecureStore.setItemAsync(ikey, uuid);
  },
};

export default deviceIDMethods;
