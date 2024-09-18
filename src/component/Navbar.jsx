import React from 'react'
import NoteSearch from './NoteSearch'

const Navbar = ({onSearchNotes}) => {
  return (
    <div className='note-app__header'>
        <h1>Notes</h1>
        <NoteSearch onSearchNotes={onSearchNotes}/>
    </div>
  )
}

export default Navbar