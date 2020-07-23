/*
?how to create store?
*using create store in redux
?why we want redux persist
* localstorage functionality in redux store but we cant always store and remove it so we use redux persist pacakge
*/

import { persistStore } from "redux-persist";

const { default: logger } = require("redux-logger");
const { createStore, applyMiddleware } = require("redux");

const { default: rootReducer } = require("./root-reducer");

const middlewares = [logger];
export const store = createStore(rootReducer, applyMiddleware(...middlewares))

/*
store in persisent storage
*/
export const persistor = persistStore(store)

export default { store, persistor };