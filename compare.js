const obj1 = { name: 'ahnaf' }
const obj2 = { name: 'ahnaf' }
if (JSON.stringify(obj1) === JSON.stringify(obj2)) {
    console.log("Bitch you suck")
}

function compareObjects(obj1, obj2) {
    if (Object.keys(obj1).length !== Object.keys(obj2).length
    ) {
        return false;
    }
    for (const prop in obj1) {
        if (obj1[prop] !== obj2[prop]) {
            return false;
        }
    }
    return true;
}

const isEql = compareObjects(obj1, obj2)
console.log(isEql)