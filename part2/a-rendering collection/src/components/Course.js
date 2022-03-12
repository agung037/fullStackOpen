import React from 'react'
import Header from './Header'

const Course = ({course}) => {
const parts = course.parts
const exercises = parts.map((x) => x.exercises)
const total = exercises.reduce((a,b) => a+b)

  return (
    <div>
        <Header text={course.name}/>
        <ul>
            {parts.map((c) => <li key={c.id}>{c.name} {c.exercises} </li>)}
        </ul>
      <strong>Total of {total} exercises</strong>
    </div>
)
}

export default Course