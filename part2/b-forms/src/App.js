import { useState } from "react"
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";

const App = () => {
  const [persons, setPersons] = useState([    
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
    ])
  const [newContact, setNewContact] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [find, setFind] = useState('')
  const [findResult, setFindResult] = useState(persons)
  


  const submitHandler = (event) => {
    event.preventDefault();

    // check for duplicate if not duplicate proceed
    if (!persons.map(x => x.name ).includes(newContact)){
      const contactObject = {
        id: persons.length + 1,
        name: newContact,
        number: newNumber
      }
      setPersons(persons.concat(contactObject))
      setNewContact('')
      setNewNumber('')
    }

    // if duplicate send an alert
    else{
      alert(`${newContact} is already exsist in phonebook`)
    }
  } 

  const handleWriteContact = (event) => {
      setNewContact(event.target.value)
  }

  const handleWriteNumber = (event) => {
    setNewNumber(event.target.value)
  }

  const handlerFind = (event) => {
    setFind(event.target.value)
    if (event.target.value){
      let result = persons.filter(p => p.name.toLowerCase().indexOf(event.target.value.toLowerCase()) !== -1)
      setFindResult(result)
    }else{
      setFindResult(persons)
    }       
  }

  

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter handlerFind={handlerFind} find={find} />
      <h2>Add New</h2>
      <PersonForm submitHandler={submitHandler} newContact={newContact} handleWriteContact={handleWriteContact} handleWriteNumber={handleWriteNumber} newNumber={newNumber}/>
      <h2> Numbers </h2>
      <Persons find={find} findResult={findResult} persons={persons}/>
    </div>
  )
}

export default App