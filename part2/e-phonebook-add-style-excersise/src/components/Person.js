
const Person = ({name, number, handleDelete, id}) => {
  return (
    <li className="blue">
        {name}  {number} <button value={id} onClick={handleDelete}>delete</button>
    </li>
  )
}

export default Person