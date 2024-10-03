
import { GET_NOTE, ADD_NOTE, DELETE_NOTE, ARCHIVE_NOTE } from "../constans/actionTypes";
const initialState = [];

export default function note(state = initialState, action) {
    const {type, payload} = action;
    switch(type){
        case GET_NOTE : 
            return payload;
        case ADD_NOTE : 
            return [...state, payload];
        case DELETE_NOTE : 
            return state.filter(note => note.id !== payload);
        case ARCHIVE_NOTE :
            return state.map(note => 
                note.id == payload.id ? {...note, ...payload} : note
            );
        default : 
            return state
    }
}