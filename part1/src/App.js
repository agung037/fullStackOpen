import { useState } from "react";

const Anecdotes = ({votes, text}) => {
    return(
      <div>
          <p>{text}</p>
          <p>has {votes} votes</p>
      </div>
    )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
  ]
   
  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState({
    0:0,
    1:0,
    2:0,
    3:0,
    4:0,
    5:0,
    6:0
  })

  const [mostVotes, setMostVotes] = useState(0)


  const handleNext = () => {
      // create random integer from 0 - anecdotes length
      const randomIndex = Math.floor((Math.random() * anecdotes.length));


      // assign random number to change the anecdotes
      setSelected(randomIndex)
  }

  const handleVote = () => {
    // create copy of object
    const copy = { ...points }

    // add the current selected points copy with 1
    copy[selected] += 1

    // set the real points with copy points
    setPoints(copy)
    
    // find the maximum value
    const max = Object.keys(points).reduce((a, b) => points[a] > points[b] ? a : b)
    
    // set most votes with maximum key object
    setMostVotes(max)
  }

  return (
    <div>
      <h2>Anecdotes of the day : </h2>
      <Anecdotes text={anecdotes[selected]} votes={points[selected]}/>

      <p>
        <button onClick={handleVote}>Vote</button>
        <button onClick={handleNext}>next anecdotes</button>
      </p>

      <h2>Anecdotes with the most vodes </h2>
      <Anecdotes text={anecdotes[mostVotes]} votes={points[mostVotes]}/>

    </div>
  )
}

export default App