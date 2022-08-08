const mongoose = require('mongoose')

const commandLength = process.argv.length


if(commandLength !== 3 && commandLength !== 5){
    console.log('usage to view \t: node mongo.js <password> <name> <phone number>')
    console.log('usage to add \t: node mongo.js <password>')
    process.exit(1)
}

const password = process.argv[2]
const url = `mongodb+srv://agungfullstack:${password}@cluster0.eghir.mongodb.net/contactApp?retryWrites=true&w=majority`

mongoose.connect(url)

const personSchema = new mongoose.Schema({
    name: String,
    number: String
})

const Person = mongoose.model('Person', personSchema)

// add new person
if(process.argv.length === 5){
    const person = new Person({
        name: process.argv[3],
        number: process.argv[4]
    })

    person.save().then(result => {
        console.log(`${process.argv[3]} saved to our db!`)
        mongoose.connection.close()
    })

}else if(process.argv.length === 3){
    Person.find({}).then(result => {
        result.forEach(person => {
            console.log(person)
        })
        mongoose.connection.close()
    })
}