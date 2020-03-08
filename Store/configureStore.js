import {createStore} from 'redux';
import toggleFavorite from './Reducers/favoriteReducer';
import setAvatar from './Reducers/avatarReducer';
import {persistCombineReducers} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import {AsyncStorage} from '@react-native-community/async-storage';


const rootPersistConfig = {
  key: 'root',
  storage,
};

export default createStore(persistCombineReducers(rootPersistConfig, {toggleFavorite, setAvatar}));
