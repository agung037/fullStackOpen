// var animals = [
//     {name: 'Flufy', species: 'rabbit'},
//     {name: 'Kipu', species: 'chicken'},
//     {name: 'Spike', species: 'goat'},
//     {name: 'Lou', species: 'goat'},
//     {name: 'Ramon', species: 'cat'},
//     {name: 'Brian', species: 'dog'},
//     {name: 'Pengkin', species: 'chicken'},
//     {name: 'Carmelo', species: 'fish'}
// ]

// let names = animals.map((x) => x.name)

// console.log(names)

// const initialValue = 10
// const getMax = (a, b) => Math.max(a,b)

// const hasil = [1,2,34,3,4].reduce(getMax, 3)

// console.log(hasil)

var orders = [
    {amount: 250},
    {amount: 400},
    {amount: 100},
    {amount: 325},
]

var totalAmt = orders.reduce((sum, order) => sum + order.amount, 1)

console.log(totalAmt)