//import { configureStore } from "@reduxjs/toolkit";
import { legacy_createStore as createStore } from 'redux';
import { setUserReducer } from "./reducers/setUserReducer"



export const configureStore = () => createStore(setUserReducer);

