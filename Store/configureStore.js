import { createStore } from 'redux';
import toggleFavorite from './Reducers/favoriteReducer';
import setAvatar from './Reducers/avatarReducer';
import toBeWatched from './Reducers/toBeWatchedMovieReducer';
import toBeReWatched from './Reducers/toBeReWatchedMovieReducer';
import watched from './Reducers/watchedMovieReducer';
import { persistCombineReducers } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { AsyncStorage } from '@react-native-community/async-storage';


const rootPersistConfig = {
  key: 'root',
  storage,
};

export default createStore(persistCombineReducers(rootPersistConfig, { toggleFavorite, setAvatar, toBeReWatched, toBeWatched, watched }));
