function parseCount(num) {
	const result = Number.parseFloat(num)
	if (Number.isNaN(result)) {
		throw new Error('Невалидное значение')
	}
	return result
}
console.log(parseCount('56.56'))

function validateCount(num) {
	try {
		return parseCount(num)
	} catch (error) {
		return error
	}
}






class Triangle {
	constructor(one, two, three) {
		this.one = one;
		this.two = two;
		this.three = three
		const res = this.one + this.two
		if (res < this.three || this.one > this.three || this.two > this.three) {
			throw new Error('Треугольник с такими сторонами не существует');
		}
	}
	get perimeter() {
		const result = this.one + this.two + this.three
		return +result.toFixed(1)
	}
	get area() {
		const general = (this.one + this.two + this.three) / 2
		const result = Math.sqrt(general * (general - this.one) * (general - this.two) * (general - this.three))
		return +result.toFixed(3)
	}
}
const treul = new Triangle(100, 3, 10)
console.log(treul)


function getTriangle(one, two, three) {
	try {
		const trangeit = new Triangle(one, two, three)
		return trangeit

	} catch (error) {
		return {
			get area() {
				return "Ошибка! Треугольник не существует"
			},
			get perimeter() {
				return "Ошибка! Треугольник не существует"
			}
		}

	}
}

const tree = getTriangle(1, 3, 100)

console.log(tree)