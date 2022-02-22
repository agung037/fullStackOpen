import {useState} from 'react'

const App = () => {
  let [counter, setCounter] = useState(0)

  // setTimeout(
  //   () => setCounter(counter + 1),
  //   1000
  // )

  const handleClick = () => {
    console.log("button clicked")
    
    if (counter >= 15)
    {
      setCounter(counter = 0)
    }else{
      setCounter(counter += 3)
    }
  }

  const handleClickMinus = () => {
    setCounter(counter - 1)
  }

  console.log("rendering ", counter)

  return(
    <div>

      <p>
        {counter}
      </p>

      <button onClick={handleClick}> 
        benar +3
      </button>
      
      <button onClick={handleClickMinus}>
        salah -1
      </button>
    </div>
  )

}
export default App