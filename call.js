const ahnaf = {
    id: 101,
    balance: 5000,
    name: 'ahnaf',
    treatDay: function (expense) {
        this.balance = this.balance - expense;
        console.log(this)
        return this.balance;
    }
}
const heroBalam = {
    id: 102,
    balance: 6000,
    name: 'hero balam'
}

ahnaf.treatDay.apply(heroBalam, [500, 1000]);