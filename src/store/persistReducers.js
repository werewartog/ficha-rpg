import AsyncStorage from '@react-native-community/async-storage';
import { persistReducer } from 'redux-persist';

export default reducers => {
  const persistedReducer = persistReducer(
    {
      key: 'ficha-rpg',
      storage: AsyncStorage,
      whitelist: ['profile'],
    },
    reducers,
  );
  return persistedReducer;
};
