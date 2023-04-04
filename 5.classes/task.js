
class PrintEditionItem {
	constructor(name, releaseDate, pagesCount) {

		this.name = name;
		this.releaseDate = releaseDate;
		this.pagesCount = pagesCount;
		this.state = 100;
		this.type = null;
	}

	fix() {
		this.state *= 1.5;
	}

	set state(newState) {
		if (newState < 0) {
			this._state = 0;
		} else if (newState > 100) {
			this._state = 100;
		} else {
			this._state = newState;
		}
	}

	get state() {
		return this._state;
	}
};

class Magazine extends PrintEditionItem {
	constructor(name, releaseDate, pagesCount) {
		super(name, releaseDate, pagesCount);
		this.type = "magazine";
	}
}

class Book extends PrintEditionItem {
	constructor(author, name, releaseDate, pagesCount) {
		super(name, releaseDate, pagesCount);
		this.author = author;
		this.type = "book";
	}
}

class NovelBook extends Book {
	constructor(author, name, releaseDate, pagesCount) {
		super(author, name, releaseDate, pagesCount)
		this.type = "novel";
	}
}

class FantasticBook extends Book {
	constructor(author, name, releaseDate, pagesCount) {
		super(author, name, releaseDate, pagesCount);
		this.type = "fantastic";
	}
}

class DetectiveBook extends Book {
	constructor(author, name, releaseDate, pagesCount) {
		super(author, name, releaseDate, pagesCount);
		this.type = "detective";
	}
}

class Library {
	constructor(name) {
		this.name = name;
		this.books = [];
	}

	addBook(book) {
		if (book.state > 30) {
			this.books.push(book);
		}
	}

	findBookBy(type, value) {
		for (let book of this.books) {
			if (book[type] === value) {
				return book;
			}
		}
		return null;
	}

	giveBookByName(bookName) {
		for (let book of this.books) {
			if (book.name === bookName) {
				const result = this.books.indexOf(book);
				return this.books.splice(result, 1)[0];
			}
		}
		return null;
	}
}


class Student {
	constructor(name) {
		this.name = name;
		this.marks = {};
	}

	addMark(assessment, subject) {
		if (assessment < 2 || assessment > 5) {
			return;
		}
		if (!(subject in this.marks)) {
			this.marks[subject] = [];
		}
		this.marks[subject].push(assessment);
	}

	getAverageBySubject(predmet) {
		// debugger
		if (!(predmet in this.marks)) {
			return 0;
		}

		const sum = this.marks[predmet].reduce((acc, val) => acc + val, 0);
		return sum / this.marks[predmet].length;
	}

	getAverage() {
		debugger

		let sum = 0;
		let total = 0;

		for (let predmet of Object.keys(this.marks)) {
			sum += this.marks[predmet].reduce((acc, key) => acc + key, 0);
			total += this.marks[predmet].length;
		}

		return sum / total;

	}
}























