import {combineReducers} from 'redux';
import { createStore } from "redux";
import Reducer from "./Reducer";

const reducer = combineReducers({
    store: Reducer
});

export const store = createStore(reducer);