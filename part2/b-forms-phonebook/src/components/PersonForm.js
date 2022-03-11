
const PersonForm = ({submitHandler, newContact, handleWriteContact, handleWriteNumber, newNumber}) => {
  return (
    <div>
        <form onSubmit={submitHandler}>
        <div>
          name: <input value={newContact} onChange={handleWriteContact}/>
        </div>
        <div>
        number: <input value={newNumber} onChange={handleWriteNumber}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    </div>
  )
}

export default PersonForm