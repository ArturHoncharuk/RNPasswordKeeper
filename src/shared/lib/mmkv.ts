import {MMKV, Mode} from 'react-native-mmkv';

export const mmkv = new MMKV({
  id: 'user-storage',
  encryptionKey: 'hunter2',
  mode: Mode.MULTI_PROCESS,
  readOnly: false,
});
