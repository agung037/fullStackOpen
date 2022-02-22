import {useState} from 'react'

const Display = ({counter}) => <div><h2 className='text-center'>{counter}</h2></div>

const Button = ({onClick, text}) => {
  return(
    <button onClick={onClick} className="border btn btn-lg mr-3">
      {text}
    </button>
  )
}

const App = () => {
  const [counter, setCounter] = useState(0)

  const increaseByThree = () => setCounter(counter + 3)
  const decreaseByOne = () => setCounter(counter - 1)
  const setToZero = () => setCounter(0)

  return(
    <div className='container mt-5'>
      
      <Display counter={counter}/>

      <div className='d-flex justify-content-center mt-4'>
        <Button onClick={setToZero} text={"reset"}/>
        <Button onClick={increaseByThree} text={"+3"}/>
        <Button color="danger" onClick={decreaseByOne} text={"-1"}/>
      </div>

    </div>
  )

}
export default App