import {useState, useEffect} from 'react'
import axios from 'axios'
// import Note from './components/Note';
import Person from './components/Person'

const App = () => {
  // const [notes, setNotes] = useState([])
  // const [newNote, setNewNote] = useState('')
  // const [showAll, setShowAll] = useState(true)

  const [persons, setPersons] = useState([])
  const [newNumber, setNewNumber] = useState('')
  const [newName, setNewName] =useState('')
  
  useEffect(() =>axios.get('http://localhost:3001/persons').then(r => setPersons(r.data)), [])

  // const addNote = (event) => {
  //   event.preventDefault()
  //   const noteObject = {
  //     content: newNote,
  //     date: new Date().toISOString(),
  //     important: Math.random() > 0.5,
  //     id: notes.length + 1
  //   }
  //   setNotes(notes.concat, noteObject)
  //   setNewNote('')
  // }

  const addPerson = (event) => {
    event.preventDefault();
    const personObj = {
      name: newName,
      number: newNumber,
      id: persons.length + 1
    }
    setPersons(persons.concat, personObj)
    setNewName('')
    setNewNumber('')
  }
  
  // const handleNoteChange = (event) => {
  //   console.log(event.target.value)
  //   setNewNote(event.target.value)
  // }

  // const notesToShow = showAll ? notes : notes.filter(note => note.important)

  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    console.log(event.taget.value)
    setNewNumber(event.target.value)
  }

  return (
    <div>
      <h1>My PhoneBook</h1>
      <div>
        <form onSubmit={addPerson}>
          <div>
            name <input value={newName} onChange={handleNameChange} />
          </div>
          <div>
            number <input value={newNumber} onChange={handleNumberChange}/>
          </div>
          
          <button type='submit'>add</button>
        </form>
      </div>
      <div>
        <ul>
          {persons.map(p => <Person key={p.id} person={p}/>)}
        </ul>
      </div>
    </div>
  )
}

export default App;
