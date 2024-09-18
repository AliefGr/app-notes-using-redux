import React from 'react'
import NoteInput from './NoteInput'
import NoteLIstBody from './NoteLIstBody'

const CretaeNote = ({onCreateNote}) => {
  return (
    <div className='note-input'>
        <h2>Create Note</h2>
        <NoteInput onCreateNote={onCreateNote}/>
    </div>
  )
}

export default CretaeNote