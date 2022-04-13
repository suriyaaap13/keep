import React, {useState} from "react";

function CreateArea(props) {
  const [title, setTitle] = useState("");
  const [note, setNote] = useState("");
  function handleSubmit(event){
    event.preventDefault();
    const obj = {title: title, note: note};
    setTitle("");
    setNote("");
    return props.onAdd(obj);
  }
  function handleTitleChange(event){
    setTitle(event.target.value);
  }
  function handleNoteChange(event){
    setNote(event.target.value);
  }

  return (
    <div>
      <form onSubmit = {handleSubmit}>
        <input onChange = {handleTitleChange} name="title" placeholder="Title" />
        <textarea onChange = {handleNoteChange} name="content" placeholder="Take a note..." rows="3" />
        <button>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
