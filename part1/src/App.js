import {useState} from 'react'

const Button = ({handler, text}) => <button onClick={handler}>{text}</button>

const LargeText = ({text}) => <h2 className='my-4'>{text}</h2>


const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const goodHandler = () => setGood(good + 1)
  const neutralHandler = () => setNeutral(neutral + 1)
  const badHandler = () => setBad(bad + 1)

  return(
    <div>
      <LargeText text={"give feedback"}/>
      <Button handler={goodHandler} text={"Good"} />
      <Button handler={neutralHandler} text={"Neutral"} />
      <Button handler={badHandler} text={"Bad"} />

      <LargeText text={"statistics"}/>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>

    </div>
  )

}


export default App