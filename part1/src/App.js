const seedrandom = require('seedrandom');

const Header = (props) => {
  return <h1>{props.course}</h1>
}

const Identity = (props) => {
  const campuses = ['Harvard', 'Yale University', 'Priceton', 'Columbia University', 'Upenn', 'University of Helsinki', 'TU Munich']
  const rng = seedrandom(props.name)
  const campus = campuses[Math.floor(rng()* campuses.length)];
  return(
    <div>
      <p>My name is {props.name} and iam student of <strong> {campus} </strong></p>
    </div>
  )
}

const Total = (props) => {
  console.log(props)
  return (
    <div>
      <p>
        Number of exercises : {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises}
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


const Content = (props) => {

  return (
    <div>
      <Part course={props.parts[0].name} excersise={props.parts[0].exercises}/>
      <Part course={props.parts[1].name} excersise={props.parts[1].exercises}/>
      <Part course={props.parts[2].name} excersise={props.parts[2].exercises}/>
    </div>
  )
}

const Hello = ({name, age}) => {
  const bornYear = () => new Date().getFullYear() - age

  return (
    <div>
      <p>
        Hello {name}, you are {age} years old
      </p>
      <p>so you probably born in {bornYear()}</p>
    </div>
  )
}



const App = () => {
  const name = "Peter"
  const age = 10
  
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course={course.name}/>
      <Content parts={course.parts} />
      <Total parts={course.parts} />


      <Hello name="Maya" age={19+20}/>
      <Hello name={name} age={age}/>
      <Hello name="Agung" age={26}/>

      <Identity name={"Agung Kurniawan"} />   
      <Identity name={"Sriyanto "} />   
      <Identity name={"Herhudaya Perkasa "} />   
      <Identity name={"Husni Arrafat Ulinnuha"} />   
      <Identity name={"Anis Sofiana"} /> 
      <Identity name={"Agung Kurniawan, S.kom, MB"} /> 

    </div>

  
  )
}

export default App