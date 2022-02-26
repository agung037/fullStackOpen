import React from 'react'
import Note from './components/Note'


const App = (props) => {
  const {notes} = props

  return (
    <div>
      <h1>Notes Nich</h1>
      <ul>
        {notes.map((note) => <Note key={note.id} note={note}/>)}
      </ul>
    </div>
  )
}

export default App