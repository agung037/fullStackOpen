const express = require('express')
const morgan = require('morgan')
const res = require('express/lib/response')
const cors = require('cors')

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.static('build'))
app.use(morgan(function (tokens, req, res) {
    return [
      tokens.method(req, res),
      tokens.url(req, res),
      tokens.status(req, res),
      tokens.res(req, res, 'content-length'), '-',
      tokens['response-time'](req, res), 'ms',
      JSON.stringify(req.body)
    ].join(' ')
  }))



let persons = [
    
    { 
        "id": 1,
        "name": "Arto Hellas", 
        "number": "040-123456"
    },
    { 
        "id": 2,
        "name": "Ada Lovelace", 
        "number": "39-44-5323523"
    },
    { 
        "id": 3,
        "name": "Dan Abramov", 
        "number": "12-43-234345"
    },
    { 
        "id": 4,
        "name": "Mary Poppendieck", 
        "number": "39-23-6423122"
    }

]


app.get('/api/persons', (request, response) => {
    response.json(persons)
})


app.get('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id)
    const person = persons.find(p => p.id === id)

    if(person){
        response.json(person)
    }else{
        response.status(404).end()
    }
})


app.get('/info', (request, response) => {
    const count = persons.length
    const date = new Date()
    response.send(`phonebook has info for ${count} people <br> ${date}`)
})


const generateRandom = () => {
    const min = 100000
    const max = 999999
    return Math.floor(Math.random() * (max - min + 1) + min)
}

app.post('/api/persons', (request, response) => {

    const body = request.body

    // check if name and number exsist
    if(!body.name || !body.number){
        return response.status(400).json({
            error: 'name or number missing'
        })
    }

    // check for duplicate
    const nameExist = persons.find(p => p.name == body.name)

    if(nameExist){
        return response.status(400).json({
            error: "name must be unique"
        })
    }

    const person = {
        id: generateRandom(),
        name: body.name,
        number: body.number,
    }

    persons = persons.concat(person)
    response.json(person)

})

const PORT = process.env.PORT || 3001
app.listen(PORT, () => console.log(`server run on port ${PORT}`))