import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes.js";

function App() {
  return (
    <div>
      <Header />
      {notes.map((Currnote) => (
        <Note
          key={Currnote.key}
          title={Currnote.title}
          content={Currnote.content}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
