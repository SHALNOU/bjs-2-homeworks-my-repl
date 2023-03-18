// function getArrayParams(...arr) {

// 	let min = Math.min(...arr);
// 	let max = Math.max(...arr);
// 	const sum = arr.reduce((acc, curr) => acc + curr, 0);
// 	const avg = sum / arr.length;

// 	console.log(avg);

// 	return { min: min, max: max, avg: +avg.toFixed(2) };
// }

// console.log(getArrayParams(1, 2, 3, -100, 10));

function getArrayParams(...arr) {
	let min = arr[0];
	let max = arr[0];
	let sum = 0;

	for (let i = 0; i < arr.length; i++) {
		if (arr[i] < min) {
			min = arr[i];
		}
		if (arr[i] > max) {
			max = arr[i];
		}
		sum += arr[i];
	}

	const fix = sum / arr.length;
	const avg = Number(fix.toFixed(2));

	return { min, max, avg };
}

console.log(getArrayParams(-99, 99, 10));





function summElementsWorker(...arr)//суммирования элементов; 
{
	return arr.reduce((acc, val) => acc + val, 0);

}
console.log(summElementsWorker(1, 4, 4, 4,));//суммир элементов масиыва




function differenceMaxMinWorker(...arr)//вычисления разницы максимального и минимального элементов; 
{
	if (arr.length === 0) {
		return 0;
	}

	let max = Math.max(...arr);
	let min = Math.min(...arr);
	let result = max - min;
	return result;
}

console.log(differenceMaxMinWorker(2, 5, 6, 6, 8, 3, 5));





function differenceEvenOddWorker(...arr) //вычисления разницы сумм чётных и нечётных элементов;
{

	if (arr.length === 0) {
		return 0;
	}

	let maxOddWorkers = 0;
	let minOddWorkers = 0;

	for (let i = 0; i < arr.length; i++) {

		if (arr[i] % 2 === 0) {
			maxOddWorkers += arr[i];
		} else if (arr[i] % 2 !== 0) {
			minOddWorkers += arr[i];
		}
	}

	console.log(maxOddWorkers);
	console.log(minOddWorkers);
	let result = maxOddWorkers - minOddWorkers;
	return result;
}

console.log(differenceEvenOddWorker(94, 51, 57, 41, 47, 66, 58, 10, 38, 17));



function averageEvenElementsWorker(...arr) //вычисления среднего значения чётных элементов.
{

	let umEvenElement = 0;
	let countEvenElement = 0;

	if (arr.length === 0) {
		return 0;
	}

	for (let i = 0; i < arr.length; i++) {

		if (arr[i] % 2 === 0) {
			countEvenElement++;
			umEvenElement += arr[i];
		}
	}


	let result = umEvenElement / countEvenElement;

	return result;

}

averageEvenElementsWorker();


function makeWork(arrOfArr, func) {
	let maxWorkerResult = -Infinity;
	for (let i = 0; i < arrOfArr.length; i++) {
		const result = func(...arrOfArr[i]);
		if (result > maxWorkerResult) {
			maxWorkerResult = result;
		}
	}
	return maxWorkerResult;
}

makeWork();

