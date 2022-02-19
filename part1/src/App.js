const Header = (props) => {
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}


const Total = (props) => {
  return (
    <div>
      <p>
        Number of exercises : {props.total}
      </p>
    </div>
  )
}

const Part = (props) => {

  return(
    <div>
      <p>{props.course} | {props.excersise}</p>
    </div>
  )
}


const Content = () => {
  const part1 = "Fundamental of React"
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14
  return (
    <div>
      <Part course={part1} excersise={exercises1}/>
      <Part course={part2} excersise={exercises2}/>
      <Part course={part3} excersise={exercises3}/>
    </div>
  )
}


const App = () => {
  const course = "Half Stack application development"

  return(
    <div>
      <Header course={course} />
      <Content />
      <Total total = {10 + 7 + 14}/>
    </div>
  )

}


export default App