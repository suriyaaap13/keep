import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [content, setContent] = useState([
    {
      title: "",
      note: ""
    }
  ]);
  function addNewContent(obj) {
    console.log(obj);
    setContent((prevValue) => {
      console.log(prevValue);
      return [...prevValue, obj];
    });
  }
  return (
    <div>
      <Header />
      <CreateArea onAdd={addNewContent} />
      <Note key={1} title="Note title" content="Note content" />
      <Footer />
    </div>
  );
}

export default App;
