const Filter = ({handlerFind, find}) => {

  return (
    <div>
    Filter Show <input value={find} onChange={handlerFind} />
    </div>
  )
}

export default Filter