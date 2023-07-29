import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { Reducer } from "./Reducer";
import thunk from "redux-thunk";
import logger from "redux-logger";

const rootReducer =combineReducers({user:Reducer})
const Store = configureStore({reducer:rootReducer, middleware:[thunk,logger]})
export default Store