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
  const total = good + bad + neutral
  const average = (good - bad) / total
  const positive = good / total

  return(
    <div>
      <LargeText text={"give feedback"}/>
      <Button handler={goodHandler} text={"Good"} />
      <Button handler={neutralHandler} text={"Neutral"} />
      <Button handler={badHandler} text={"Bad"} />

      <LargeText text={"statistics"}/>
      <p>
      good {good} <br/>
      neutral {neutral} <br/>
      bad {bad} <br/>
      all {total} <br/>
      average {average} <br/>
      positive {positive} %
      </p>
    </div>
  )

}


export default App