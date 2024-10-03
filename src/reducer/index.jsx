import { combineReducers } from "@reduxjs/toolkit";
import keyword from "./Keyword";
import notes from './Note'

const rootReducer = combineReducers({
    notes,
    keyword
})

export default rootReducer;