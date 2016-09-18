/**
 * Student
 */
class Student {
    fullName: string;
    constructor(firstName: string, middleInitial: string, lastName: string) {
        this.fullName = firstName + ' ' + middleInitial + ' ' + lastName;
    }
}

interface Person {
    firstName: string;
    lastName: string;
}

function greeter(person: Student) {
    return 'Hello, ' + person.fullName;
}

var user = new Student('ruan', 'zhao', 'jin');
let fullName = greeter(user);

console.log(fullName);