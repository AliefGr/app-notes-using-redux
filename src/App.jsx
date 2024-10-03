import { useContext, useEffect, useState } from "react";
import "./App.css";
// import { DataNote } from "./data/DataNote";
// import Navbar from "./component/Navbar";

import Navbar from "./containers/NoteSerachContainer";
// import CretaeNote from "./component/CretaeNote";
// import NoteLIstBody from "./component/NoteLIstBody";
import CretaeNote from "./containers/CreateNoteContainer";
import NoteLIstBody from "./containers/ListBodyContainer";
// import { NoteContext } from "./context/NoteAapp";


function App() {

  // const {fetchApi} = useContext(NoteContext)

  // useEffect(() => {
  //   fetchApi();
  // }, []);

  return (
    <>
      <Navbar />
      <div className="note-app__body">
        <CretaeNote />
        <NoteLIstBody />
        {/* tes aja */}
      </div>
    </>
  );
}

export default App;
