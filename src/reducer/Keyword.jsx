
import { SET_KEYWORD } from "../constans/actionTypes";
const initialState = "";

export default function keyword(state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
        case SET_KEYWORD:
            return payload;
        default:
            return state;
    }
}