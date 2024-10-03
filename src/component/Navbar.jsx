import React, { useContext } from 'react'
import NoteSearch from './NoteSearch'
import { NoteContext } from '../context/NoteAapp'

const Navbar = ({onSearchNotes}) => {
  // const { onSearchNotes } = useContext(NoteContext);
  return (
    <div className='note-app__header'>
        <h1>Notes</h1>
        <NoteSearch onSearchNotes={onSearchNotes}/>
    </div>
  )
}

export default Navbar