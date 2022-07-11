import { applyMiddleware, compose, createStore, Middleware } from "redux";
import logger from "redux-logger";
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";
import { rootReducer } from "./root-reducer";
import thunk from "redux-thunk";
import storage from "redux-persist/lib/storage";
import { PersistConfig } from "redux-persist";
export type RootState = ReturnType<typeof rootReducer>;
declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}
type ExtendedPersistConfig = PersistConfig<RootState> & {
  whitelist: (keyof RootState)[];
};
const middleWares = [
  process.env.NODE_ENV === "development" && logger,
  thunk,
].filter((middleware): middleware is Middleware => Boolean(middleware));
const persistConfig: ExtendedPersistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"],
};
const composeEnhancer =
  (process.env.NODE_ENV !== "production" &&
    window &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;
const persistedReducer = persistReducer(persistConfig, rootReducer);
const composedEnhancers = composeEnhancer(applyMiddleware(...middleWares));
export const store = createStore(
  persistedReducer,
  undefined,
  composedEnhancers
);
export const persistor = persistStore(store);
