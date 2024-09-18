import React from "react";
import { showFormDate } from "../data/DataNote.jsx"


const NoteItem = ({ note, OnDeleteNote, OnArchiveNote}) => {
  const { id, title, body, createdAt, archived } = note;
  const hendleDeleteNote = () => {
    OnDeleteNote(id);
  }
  const handleArchiveNote = () => {
    OnArchiveNote(id);
  }
  console.log('tes' + createdAt);
  return (
    <div className="note-item">
      <div className="note-item__content">
        <h3 className="note-item__title">{title}</h3>
        <p className="note-item__date">{showFormDate(createdAt)}</p>
        <p className="note-item__body ">{body}</p>
      </div>
      <div className="note-item__action">
        <button onClick={hendleDeleteNote} className="note-item__delete-button">Delete</button>
        <button onClick={handleArchiveNote} className="note-item__archive-button">
          {archived ? "Unarchive" : "Archive"}
        </button>
      </div>
    </div>
  );
};

export default NoteItem;
