import { useState } from "react";
import Note from "./components/Note";

const App = (props) => {
  const [notes, setNotes] = useState(props.notes)
  const [newNote, setNewNotes] = useState('')
  const [showAll, setShowAll] = useState(false)

  const notesToShow = showAll ? notes : notes.filter(note => note.important === true)

  const addNote = (event) => {
    event.preventDefault();

    const noteObject = {
      content: newNote,
      date: new Date().toISOString(),
      important: Math.random() < 0.5,
      id: notes.length + 1
    }

    setNotes(notes.concat(noteObject))
    setNewNotes('')

  }

  const handleNoteChange = (event) => {
    console.log(event.target.value)
    setNewNotes(event.target.value)
  }

  return (
    <div>
      <h1>Note</h1>

      <div>
        <button onClick={() => setShowAll(!showAll)}>
            show {showAll ? 'important' : 'all'}
        </button>
      </div>

      <ul>
        {notesToShow.map(note => <Note key={note.id} note={note} />)}
      </ul>
     
      <form onSubmit={addNote}>
        <input value={newNote} onChange={handleNoteChange}/>
        <button type="submit">save</button>
      </form>
    </div>
  )
}


export default App