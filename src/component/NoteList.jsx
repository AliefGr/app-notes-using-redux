import React from 'react'
import NoteItem from './NoteItem'

const NoteList = ({notes, OnDeleteNote, OnArchiveNote}) => {
  return (
    <div className='notes-list'>
        {notes.map((note) => 
            <NoteItem key={note.id} note={note} OnDeleteNote={OnDeleteNote} OnArchiveNote={OnArchiveNote}  />
        )}
    </div>
  )
}

export default NoteList