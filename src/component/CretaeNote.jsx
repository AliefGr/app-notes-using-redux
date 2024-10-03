import React, { useContext } from 'react'
import NoteInput from './NoteInput'
// import NoteLIstBody from './NoteLIstBody'
// import { NoteContext} from '../context/NoteAapp'

const CretaeNote = ({onCreateNote}) => {
  // const {onCreateNote} = useContext(NoteContext)
  return (
    <div className='note-input'>
        <h2>Create Note</h2>
        <NoteInput onCreateNote={onCreateNote}/>
    </div>
  )
}

export default CretaeNote