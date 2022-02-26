const bottle = { color: 'yellow', price: 50 }
Object.seal(bottle)
bottle.color = 'red'
bottle.length = 10
// to get keys
const keys = Object.keys(bottle)
// to get values
const values = Object.entries(bottle)
// to get all elements inside the object in separate arrays
console.log(values)