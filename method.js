const student = {
    id: 101,
    balance: 5000,
    name: 'ahnaf',
    major: 'maths',
    isRich: false,
    subjects: ['english', 'eco', 'mat101', 'calculus'],
    bestFriend: {
        name: 'kundu',
        major: 'maths'
    },
    takeExam: function () {
        console.log(this.name, 'taking exam')
    },
    treatDay: function (expense) {
        this.balance = this.balance - expense;
        return this.balance;
    }
}
student.takeExam();
const remaining1 = student.treatDay(1000);
const remaining2 = student.treatDay(500);
console.log(remaining2);