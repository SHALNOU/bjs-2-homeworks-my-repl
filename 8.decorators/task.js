//Задача № 1


function cachingDecoratorNew(func) {
	let cache = [];

	return (...args) => {
		const hash = md5(JSON.stringify(args));


		const cachedItem = cache.find(item => item.hash === hash);

		if (cachedItem) {
			console.log(`Из кеша: ${cachedItem.result}`);
			cache.splice(cache.indexOf(cachedItem), 1);
			cache.push(cachedItem);
			return `Из кеша: ${cachedItem.result}`;
		}

		const result = func(...args);
		cache.push({ hash, result });

		if (cache.length > 5) {
			const deletedItem = cache.shift();
			console.log(`Удален элемент из кеша: ${deletedItem.result}`);
		}

		console.log(`Вычисляем: ${result}`);
		return `Вычисляем: ${result}`;
	};
}




//Задача № 2
function debounceDecoratorNew(func, delay) {
	let timeoutId = null;
	wrapper.count = 0;
	wrapper.allCount = 0;

	function wrapper(...args) {
		wrapper.allCount++
		if (timeoutId === null) {
			func(...args);
			wrapper.count++
		} else if (timeoutId !== null) {
			clearTimeout(timeoutId)
		}
		timeoutId = setTimeout(() => {
			wrapper.count++
			func(...args)
		}, delay
		)
	}
	return wrapper
}

const funcRum = (mas) => console.log(mas)

const ram = debounceDecoratorNew(funcRum, 2000)

console.log(ram(25))
console.log(ram(27))

console.log(ram.count);
console.log(ram.allCount)



// let loggerDecorator = (func) => {
// 	function wrapper(...args) {
// 		wrapper.history.push(args)
// 		console.log(args)
// 		for (let i of args) {
// 			if (i < 0) {
// 				throw new Error('ошибка')
// 			}
// 		}
// 		return func(...args)
// 	}
// 	wrapper.history = []
// 	return wrapper
// }

// let ram = loggerDecorator(sum)
// let rul = loggerDecorator((...ary) => ary.reduce((acc, cum) => acc + cum, 0))
// console.log(ram(2, 4))
// ram(5, 7)
// ram(5, 7, 8, 9, 3)
// console.log(rul(2, 5, 7))
// console.log(ram.history)


// let cache = {};

// function sum(...arr) {
// 	const hash = arr.join(",");
// 	if (hash in cache) {
// 		console.log("Значение найдено в кеше");
// 		return cache[hash];
// 	}
// 	if (Object.keys(cache).length >= 5) {
// 		const lastKey = Object.keys(cache).pop();
// 		console.log(`Очистка кеша. Удаляем элемент ${lastKey}`);
// 		delete cache[lastKey];
// 	}
// 	console.log("Вычисляем значение");
// 	cache[hash] = arr.reduce((acc, cur) => acc + cur, 0);
// 	return cache[hash];
// }


// console.log(sum(1, 5, 7))
// console.log(sum(1, 5, 6, 4, 7))
// console.log(sum(1, 5, 6, 4, 7, 9))
// console.log(sum(1, 5, 1, 4, 7))
// console.log(sum(1, 5, 6, 6, 7))
// console.log(sum(1, 5, 9, 2, 7))
// console.log(cache)


// function decorator(func) {
// 	let cache = {};
// 	return function (...args) {
// 		const hash = args.join(',')
// 		if (hash in cache) {
// 			return cache[hash]
// 		}
// 		if (Object.keys(cache).length >= 3) {
// 			const del = Object.keys(cache).pop()
// 			console.log(`удалили с кеша ${del}`)
// 			delete cache[del]
// 		}
// 		const result = func(...args)
// 		cache[hash] = result
// 		return result
// 	}
// }
// const sum = (...args) => args.reduce((acc, cur) => acc + cur, 0)

// const res = decorator(sum)
// console.log(res(2, 5, 6, 7))
// console.log(res(2, 5, 6, 7, 8))
// console.log(res(2, 5, 6, 7, 9))
// console.log(res(2, 5, 6, 7, 11))

