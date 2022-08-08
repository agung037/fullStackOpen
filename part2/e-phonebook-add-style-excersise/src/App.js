import { useState, useEffect } from "react";
import Person from "./components/Person";
import personService from "./services/persons"
import Success from "./components/Success";
import Error from "./components/Error";

function App() {

  const [persons, setPersons] = useState([])
  const [personToShow, setPersonToShow] = useState(persons)
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [successMassage, setSuccessMassage] = useState()
  const [errorMessage, setErrorMessage]= useState()

  useEffect(() => {
    console.log("using effect")
    personService
      .getAll()
      .then(initialPerson => {
        setPersons(initialPerson)
      })
  }, []);

  const addPerson = (event) => {
    console.log("adding new item")

        
    event.preventDefault()
    const newPerson = {
      "name" : newName,
      "number" : newNumber
    }

    
    const person = persons.find(p => p.name === newName)
    
    // check if already exist
    if(person){

      if(window.confirm(`${person.name} is already added to phonebook, replace the old number with the new one ?`)){
      // find the id
      const id = person.id

      // create updated object
      const updatedPerson = {...person, number: newNumber}

      // update exsisting phonumber
      personService
        .update(id, updatedPerson)
        .then(response => {
          setPersons(persons.map(p => p.id !== id ? p : response.data))
          // clear the form input
          setNewName('')
          setNewNumber('')
        })
      }else{
        console.log("aborted")
      }
      
    }else{
      personService
      .addPerson(newPerson)
      .then(returnedPerson => {
        setPersons(persons.concat(returnedPerson))
        setSuccessMassage(`added ${newName}`)

        // clear message after 5 second
        setTimeout(() => {
          setSuccessMassage(null)
        }, 3000)

        setNewName('')
        setNewNumber('')
      })
    }
  }

  const handleInputName = (event) => {
    setNewName(event.target.value)
  }

  const handleInputNumber = (event) => {
    setNewNumber(event.target.value)
  }

  const handleFilter = (event) => {
    console.log(event.target.value)
    const result = persons.filter(p => p.name.toLowerCase().includes(event.target.value.toLowerCase()))
    setPersonToShow(result)
  }

  const handleDelete = (event) => {
    if (window.confirm(`Delete ${persons.find(p => p.id == event.target.value).name} ?`)){
      personService
        .deletePerson(event.target.value)
        .catch(error => {
          setErrorMessage(`information of ${persons.find(p => p.id == event.target.value).name} has already been removed from server`)
          setTimeout(() => {
            setErrorMessage(null)
          }, 5000)
        
        })
      setPersons(persons.filter(p => p.id != event.target.value))
      console.log('name deleted')
    }else{
      console.log('abort delete')
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        {errorMessage ? < Error message={errorMessage}/> : ""}
        {successMassage ? <Success message={successMassage}/> : ""}
      </div>
      <div>
        filter shown with <input onChange={handleFilter} />
      </div>

      <div>
        <h2>add new </h2>
        name : <input onChange={handleInputName} value={newName} /> <br/>
        number : <input onChange={handleInputNumber} value={newNumber} /> <br />
        <button onClick={addPerson}>add</button>
      </div>
      <div>
        <h2>Numbers</h2>
        <ul>
          {personToShow.length > 0 ? personToShow.map(p => <Person handleDelete={handleDelete} key={p.id} id={p.id} name={p.name} number={p.number}/>) : persons.map(p => <Person handleDelete={handleDelete} key={p.id} id={p.id} name={p.name} number={p.number}/>)}
      
        </ul>
      </div>
    </div>
  );
}

export default App;
