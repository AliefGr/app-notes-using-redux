import React from 'react'
import NoteList from './NoteList'

const NoteLIstBody = ({notes, keyword, OnDeleteNote, OnArchiveNote}) => {
    const filterNote = notes.filter((note) => 
        note.title.toLowerCase().includes(keyword.toLowerCase())
    );
    

    const activeNote = filterNote.filter((note) => !note.archived);
    const archiveNote = filterNote.filter((note) => note.archived);

    const emptyNoteActive = activeNote.length === 0 && (
      <p className='notes-list__empty-message'>Tidak Ada Catatan</p>
    );

    const emptyNoteArchive = archiveNote.length === 0 && (
      <p className='notes-list__empty-message'>Tidak Ada Catatan Yang Di Arsifkan</p>
    );

  return (
    <div>
        <h2>Catatan Active</h2>
        {emptyNoteActive}
        <NoteList notes={activeNote} OnDeleteNote={OnDeleteNote} OnArchiveNote={OnArchiveNote}/>
        <h2>Arsif</h2>
        {emptyNoteArchive}
        <NoteList notes={archiveNote} OnDeleteNote={OnDeleteNote} OnArchiveNote={OnArchiveNote}/>
    </div>
  )
}

export default NoteLIstBody