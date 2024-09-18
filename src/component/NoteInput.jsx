import React, { useState } from "react";

const NoteInput = ({onCreateNote}) => {
  const initialState = {
    title: "",
    body: "",
  };
  const [formData, setFormData] = useState(initialState);

  const { title, body } = formData;

  const onChangeNote = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    console.log(formData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    onCreateNote(formData);
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <p className="note-input__title__char-limit">character left</p>
        <input
          type="text"
          className="note-input__title"
          placeholder="This is title ..."
          name="title"
          value={title}
          onChange={onChangeNote}
          required
        />
        <textarea
          onChange={onChangeNote}
          name="body"
          value={body}
          className="note-input__body"
          placeholder="Write your note here ..."
        ></textarea>
        <button type="submit">Create</button>
      </form>
    </>
  );
};

export default NoteInput;
