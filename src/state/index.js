import { createStore, applyMiddleware, combineReducers } from "redux";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

// Import Reducers
import userReducer from "./reducers/userReducer";
import artistReducer from "./reducers/artistReducer";

// Combine Reducers
const rootReducer = combineReducers({
  user: userReducer,
  artist: artistReducer,
});

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const configureStore = () => {
  const store = createStore(
    persistedReducer,
    composeWithDevTools(applyMiddleware(thunkMiddleware))
  );

  const persistor = persistStore(store);
  return {
    store,
    persistor,
  };
};

export default configureStore;
