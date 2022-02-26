const bottle = {
    color: 'yellow',
    price: 50,
    kiss: false
}
/* 
for(let i = 0; i<10; i++) */
const bottle2 = Object.entries(bottle)
for (const op of bottle2) {
    console.log(op)
}