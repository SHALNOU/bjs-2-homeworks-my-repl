function Student(name, gender, age) {

	this.name = name;
	this.gender = gender;
	this.age = age;
	this.marks = [];
}
let student1 = new Student("Василиса", "женский", 19);
let student2 = new Student("Женя", "мужской", 29);
let student3 = new Student("Аня", "женский", 59);


Student.prototype.setSubject = function (subjectName) {
	this.subject = subjectName;
};
student1.setSubject('algebra');


Student.prototype.addMarks = function (...marksToAdd) {
	if (!this.marks) {
		return 0;
	}
	this.marks.push(...marksToAdd);
};
student1.addMarks(4, 5, 4);


Student.prototype.getAverage = function () {
	if (!this.marks || this.marks.length === 0) return 0;
	let sum = this.marks.reduce((acc, i) => acc + i, 0);
	this.average = sum / this.marks.length;
	this.average = +this.average.toFixed(2);
	return this.average;
};

student1.getAverage();






Student.prototype.exclude = function (reason) {

	delete this.marks;
	delete this.subject;

	this.excluded = reason;
};

student1.exclude('лентяй');

console.log(student1);