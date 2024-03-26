import {AsyncStorage} from '@onebasket/shared-ui-react-native/src/context';
import {TICKETS_STORAGE_KEY} from '@onebasket/ticketing-ui-react-native';
import Storage from '@react-native-async-storage/async-storage';

export const oneBasketStorage: AsyncStorage = {
  getItem: async (key: string) => {
    return Storage.getItem(key);
  },
  removeItem: async (key: string) => {
    return Storage.removeItem(key);
  },
  setItem: async (key: string, value: string) => {
    return Storage.setItem(key, value);
  },
};

export const clearOneBasketStorage = async () => {
  return Storage.multiRemove([TICKETS_STORAGE_KEY]);
};
