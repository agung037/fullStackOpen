const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      },
      {
        name: '100 Days Of Code with angela yu',
        exercises: 67,
        id:4
      }
    ]
  }

ex = course.parts.map((x) => x.exercises)

total = ex.reduce((a,b) => a+b)

console.log(total)

// const numbers = [100,200,300,1,2,3]

// hasil = numbers.reduce((a,b) => a+b)

// console.log(hasil)