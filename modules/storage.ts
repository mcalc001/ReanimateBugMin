import {Storage} from '@onebasket/shared-core-react';

import {MMKV} from 'react-native-mmkv';

const mmkv = new MMKV();

export const oneBasketStorage: Storage = {
  getItem: (key: string) => {
    return mmkv.getString(key) ?? null;
  },
  setItem: (key: string, value: string) => {
    mmkv.set(key, value);
  },
  removeItem: (key: string) => {
    mmkv.delete(key);
  },
};

export default mmkv;
