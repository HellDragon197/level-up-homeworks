'use strict';

// Unit link - https://learn.javascript.ru/recursion

// Task 1
function sumTo(n) {
	var sum = 0;
	for (var i = 0; i <= n; i += 1) {
		sum += i;
	}
	return sum;
}
console.log(sumTo(100));

function sumTo(n) {
	if(n > 1) {
	return n + sumTo(n - 1);
}else {
	return n;
}
}
console.log(sumTo(100));

function sumTo(n) {
	return n * (n + 1) / 2;
}
console.log(sumTo(100));

//Вариант решения по формуле арифметической прогрессии самый быстрый т.к. происходит всего 3 вычисления.
//Самый медленный - рекурсия. Т.к. она приводит к хранению всех данных для неоконченных внешних вызовов в стеке.
//Нельзя т.к. максимальная глубина рекурсии в браузере 10000 вложенных вызовов. 

// Task 2
function factorial(n) {
	if(n > 1) {
	return n * factorial(n -= 1);
	}else {
		return 1;
	}
}
console.log(factorial(5));

// Task 3
function fin(n) {
	var a = 1;
	var b = 1;
	var c;
	for (var i = 3; i <= n; i += 1) {
		c = a + b;
		a = b;
		b = c;
	}
	return c
}
console.log(fin(3))
console.log(fin(7))
console.log(fin(77))

// Unit link - https://learn.javascript.ru/named-function-expression

// Task 1
function g() { return 1; }

console.log(g); //Код выполнится, т.к. это обычное объявление function declaration.

(function g() { return 1; });

console.log(g); //Здесь есть часть NFE, значит переменная g видна локально и браузер выдаст ошибку.
