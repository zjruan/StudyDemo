/**
 * Student
 */
var Student = (function () {
    function Student(firstName, middleInitial, lastName) {
        this.fullName = firstName + ' ' + middleInitial + ' ' + lastName;
    }
    return Student;
}());
function greeter(person) {
    return 'Hello, ' + person.fullName;
}
var user = new Student('ruan', 'zhao', 'jin');
var fullName = greeter(user);
console.log(fullName);
