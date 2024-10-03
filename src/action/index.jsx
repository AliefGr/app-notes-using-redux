import * as types from "../constans/actionTypes";
import { fetchApiNotes, createApiNote, deleteAPiNote, archiveApiNote } from "../api/NotesApi";

export const addNote = note => async (dispatch) =>{
    try{
        const newNote = {...note, archived : false, createdAt : new Date()};
        const res = await createApiNote(newNote);
        dispatch({type : types.ADD_NOTE, payload : res.data});
    }catch(error){
        console.log(error)
    }
} 

export const archiveNote = data => async (dispatch) => {
    try {
        const editedNote = {...data, archived : !data.archived};
        const res = await archiveApiNote(data.id, editedNote);
        dispatch({type : types.ARCHIVE_NOTE, payload : res.data})
    }catch(error){
        console.log(error)
    } 
}

export const deleteNote = id => async (dispatch) => {
    try{
        await deleteAPiNote(id);
        dispatch({type : types.DELETE_NOTE, payload : id});
    }catch(error) {
        console.log(error)
    }
}

export const getNotes = () => async (dispatch) => {
    try{
        const res = await fetchApiNotes();
        dispatch({type : types.GET_NOTE, payload : res.data});
    }catch(error){
        console.log(error)
    }
}
 
export const serachNote = keyword => async (dispatch) => {
    try{
        dispatch({type : types.SET_KEYWORD, payload : keyword});
    }catch(error){
        console.log(error)
    }
}
