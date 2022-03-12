import axios from 'axios'
import {useState, useEffect} from 'react'
import Note from './components/Note'
import noteService from './services/notes'

const App = () => {
  const [notes, setNotes] = useState([])
  const [newNote, setNewNote] = useState('')
  const [showAll, setShowAll] = useState(true)


  useEffect(() => {
    console.log("im using effect")

    noteService
      .getAll()
      .then(initialNotes => {
        setNotes(initialNotes)
      })
      // axios
      //   .get('http://localhost:3001/notes')
      //   .then(response => {
      //     setNotes(response.data)
      //     console.log("effect has respond", response.data)
      //   })
  }, [])


  const addNote = (event) => {
    event.preventDefault()

    const noteObject = {
      content: newNote,
      date: new Date().toISOString(),
      important: Math.random() < 0.5,
      id: notes.length + 1
    }

    noteService
      .create(noteObject)
      .then(addedNote => {
        setNotes(notes.concat(addedNote))
        setNewNote('')
      })

    // axios
    //   .post('http://localhost:3001/notes', noteObject)
    //   .then(response => {
    //     console.log("adding data to notes", response)
    //     setNotes(notes.concat(response.data))
    //     setNewNote('')
    //   })
      
      
    }

    const handleNoteChange = (event) => {
      setNewNote(event.target.value)
    }

    const toggleImportanceOf = (id) => {
      const note = notes.find(n => n.id === id)
      const changedNote = {...note, important: !note.important}

      noteService
        .update(id, changedNote)
        .then(returnedNote => {
          setNotes(notes.map(note => note.id !== id ? note : returnedNote))
        })
        .catch(error => {
          alert(`the note ${note.content} was already deleted from server`)
        })
        setNotes(notes.filter(n => n.id !== id))

      // axios.put(url, changedNote).then(response => {
      //   console.log(response.data)
      //   setNotes(notes.map(note => note.id !== id ? note : response.data))
      // })
    }

    const notesToShow = showAll ? notes : notes.filter(note => note.important)    

  return (
    <div>
      <h1>Notes</h1>
      <div>
        <button onClick={() => setShowAll(!showAll)}>show {showAll ? 'important' : 'all'}</button>
      </div>
      <ul>
        {notesToShow.map(note => 
        <Note 
        key={note.id} 
        note={note}
        toggleImportance={() => toggleImportanceOf(note.id)}
        />)}
      </ul>
    
    <form onSubmit={addNote}>
        <input onChange={handleNoteChange} value={newNote} />
        <button type='submit'>save</button>
    </form>
    
    
    </div>

  )
}

export default App