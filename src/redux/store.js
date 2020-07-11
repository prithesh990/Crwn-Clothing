/*
?how to create store?
*using create store in redux
*/

const { default: logger } = require("redux-logger");
const { createStore, applyMiddleware } = require("redux");
const { default: rootReducer } = require("./root-reducer");

const middlewares = [logger];
const store = createStore(rootReducer, applyMiddleware(...middlewares))

export default store;