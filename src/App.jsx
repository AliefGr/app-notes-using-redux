import { useState } from "react";
import "./App.css";
import { DataNote } from "./data/DataNote";
import Navbar from "./component/Navbar";
import NoteInput from "./component/NoteInput";
import CretaeNote from "./component/CretaeNote";
import NoteLIstBody from "./component/NoteLIstBody";

function App() {
  const [notes, setNotes] = useState(DataNote);
  const [keyword, setKeyword] = useState("")

  // Serach Notes
  const onSearchNotes = (keyword) => {
    setKeyword(keyword)
  }

  const onCreateNote = (note) => {
    setNotes([...notes, {id: Math.round(Math.random() * 1000), createdAt: new Date(), ...note}]);
    console.log("Berhasil Menambhakan Catatn")
  }

  // OnDelete
  const OnDeleteNote = (id) => {
    const upDatedNotes = notes.filter((note) => note.id !== id);
    setNotes(upDatedNotes);
  }

  // One Archive Note
  const OnArchiveNote = (id) => {
    const upadtedUrchive = notes.map((note) => {
      if(note.id === id){
        return {...note, archived: !note.archived}
      }
      return note
    })
    setNotes(upadtedUrchive)
  }

  return (
    <>
      <Navbar onSearchNotes={onSearchNotes} />
      <div className="note-app__body">
        <CretaeNote  onCreateNote={onCreateNote} />
        <NoteLIstBody keyword={keyword} notes={notes} OnDeleteNote={OnDeleteNote} OnArchiveNote={OnArchiveNote} />
      </div>
    </>
  );
}

export default App;
