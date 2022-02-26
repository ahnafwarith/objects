//1. normal way - object literal
const student = { name: 'Ahnaf', job: 'coding' };

//2. Object constructor function
const person = new Object();

//.3 Using inheritance
const human = Object.create(student);

// 4. Object using class
class People {
    constructor(name, age) {
        this.name = ''
        this.age = ''
    }
}
const peop = new People('Manus', 12);
console.log(peop)

// 5. Function  |Syntactical Sugar|
function Manus(name) {
    this.name = name;
}
const man = new Manus('lader');
console.log(man)