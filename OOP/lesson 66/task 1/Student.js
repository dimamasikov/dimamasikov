class Student extends User {
constructor(name, surname, year) {
super(name, surname);
this.year = year;
}
getCourse() {
var y = new Date();
return y.getFullYear() - this.year;
}
}
