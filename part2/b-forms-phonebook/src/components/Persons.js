import Contact from "./Contact"

const Persons = ({find, findResult, persons}) => {
  return (
    <div>
    <ul>
        {find ? findResult.map((person) => <Contact key={person.id} person={person}/> ) : 
        persons.map((person) => <Contact key={person.id} person={person}/> )}
    </ul>
    </div>
  )
}

export default Persons