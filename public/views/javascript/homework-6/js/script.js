'use strict';

// Unit link - https://learn.javascript.ru/number#tasks

// Task 1
let a = +prompt("Введите первое число", "");
let b = +prompt("Введите второе число", "");
console.log(a + b)

// Task 2
// Так как в двоичной системе 6.35 представляется в ввиде бесконечной дроби, то происходит потеря точности, интерпретатор видит 6.34. 

// Task 3
console.log( (0.1 * 10 + 0.2 * 10) / 10 + '$' );

// Task 4
// var i = 0;
// while (i != 10) {
//   i += 0.2;
// } //Цикл бесконеный так как i никогда не будет точно равно 10.

// Task 5
function fib(n) {
  var a = 1,
    b = 0,
    x;
  for (i = 0; i < n; i++) {
    x = a + b;
    a = b
    b = x;
  }
  return b;
}


function fibBinet(n) {
	let k = (1 + Math.sqrt(5)) / 2
	return Math.round(Math.pow(k, n) / Math.sqrt(5))
}

console.log(fibBinet(77))

// Результаты отличаются из-за ошибок в округлении. Более точный результат в первой функции т.к. во второй есть квадратный корень из 5 который равен бесконечной дроби.


// // Task 6
// let max = 10
// console.log(Math.random() * max)

// // Task 7
// let min = 5;
// let max = 10;
// console.log(min + Math.random() * (max - min))

// // Task 8
// function randomInteger(min, max) {
// 	return Math.floor(Math.random() * (max - min + 1)) + min;
// }


// Unit link - https://learn.javascript.ru/string#tasks

// Task 1
function ucFirst(str) {
	if(str === " ") {
		return str;
	}
	return str[0].toUpperCase() + str.slice(1)
}

console.log(ucFirst("вася"))

// Task 2
function checkSpam(str) {
	let lower = str.toLowerCase()

	if(lower.indexOf('viagra') !== -1 || lower.indexOf('xxx') !== -1)  {
		return true
	}
	
	return false
}
console.log(checkSpam('buy VIagRA now'))
console.log(checkSpam('free xxxxxx'))
console.log(checkSpam('innocent rabbit'))

// Task 3
function truncate(str, maxlenght) {

	if(str.length > maxlenght) {
		return str.slice(0, maxlenght - 3) + '...'
	} else if(str.length <= maxlenght) {
		return str
	}
}
console.log(truncate("Вот, что мне хотелось бы сказать на эту тему:", 20))
console.log(truncate("Всем привет!", 20))

// Task 4
function extractCurrencyValue(str) {
	return +str.slice(1);
}

console.log(extractCurrencyValue('$120'))

// Additional task
function replaceSigns (str, sign, num, char) {
  let n = 0
  let result = ''
  for(let i = 0; i < str.length; i += 1) {
  	if(str[i] !== sign) {
  		result += str[i]
  	} else{
  		if(n < num.length) {
  			result += num[n]
  			n += 1
  		} else if (n === num.length) {
  			result += char
  		}
  	}
  }
  return result
}
console.log(replaceSigns('abc^de^^fg^hij', '^', '1594', ':')); // output - 'abc1de59fg4hij'
console.log(replaceSigns('abc^de^^fg^hij', '^', '22', ':')); // output - 'abc2de2:fg:hij'
console.log(replaceSigns('abcde^fghij', '^', '0123', ':')); // output - 'abcde0fghij'
