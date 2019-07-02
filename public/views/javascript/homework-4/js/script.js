'use strict';

// Unit link - https://learn.javascript.ru/while-for#tasks

// Task 1 
var i = 3;

while (i) {
  console.log( i-- );
} //крайним значением будет 1 т.к. когда переменная примет значение 0 логическое значение станет false и цикл остановится.

// Task 2
var i = 0;
while (++i < 5) console.log( i ); // цикл выведет значения от 1 до 4 т.к. при префиксной форме сначала выполнятся увеличение, а потом сравнение.

var i = 0;
while (i++ < 5) console.log( i ); // цикл выведет значения от 1 до 5 т.к. при постфиксной выполнятеся сначала сравнение, а потом увеличение.

// Task 3
for (var i = 0; i < 5; i++) console.log( i ); 

for (var i = 0; i < 5; ++i) console.log( i );
// и в 1 и во 2 случае выведутся значения от 0 до 4 т.к. сначала переменная i = 0, затем идет проверка условия и если оно верно, то выполняется ++i либо i++ и начинается следующая итерация цикла.

// Task 4
var i

for ( i = 1; i <= 10; i += 1) {
	if (i % 2 != 0) {
		continue
	}
	console.log(i)
}

// Task 5
var i = 0

while (i < 3) {
	console.log( 'номер ' + i + '!');
	i += 1;
}

// Task 6
var num

do {
	num = prompt('Введите число больше 100', 0)
} while (num <= 100 && num != null)

// Task 7
var i;
var j;

outer: for (i = 2; i <= 10; i += 1) {
	for (j = 2; j < i; j += 1) {
		if (i % j == 0) {
			continue outer;
		}
	}
	console.log(i)
}

// Unit link - https://learn.javascript.ru/switch

// Task 1
var browser;

if (browser === 'IE') {
	console.log('О, да у вас IE!')
} else if (browser === 'Chrome' || browser === 'Firefox' || browser === 'Safari' || browser === 'Opera') {
	console.log('Да, и эти браузеры мы поддерживаем')
} else {
	console.log('Мы надеемся, что и в вашем браузере все ок!')
}

// Task 2
var a = +prompt('a?', '');

switch(a) {
	case 0:
		console.log(0);
		break
	case 1:
		console.log(1);
		break
	case 2:
	case 3:
		console.log('2,3');
}

// Unit link - https://learn.javascript.ru/function-basics

// Task 1
function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    // ...
    return confirm('Родители разрешили?');
  }
}

function checkAge(age) {
  if (age > 18) {
    return true;
  }
  // ...
  return confirm('Родители разрешили?');
}
// отличий в поведении этих функций нет.

// Task 2
function checkAge(age) {
	return (age > 18) ? true : confirm('Родители разрешили?')
}

function checkAge(age) {
	return (age > 18) || confirm('Родители разрешили?')
}

// Task 3
function min(a, b) {
	if (a < b) {
		return a;
	} else {
		return b;
	}
}

// Task 4
function pow(x, n) {
	var result = x;
	for (var i = 1; i < n; i += 1) {
		result = result * x;
	}
	return result;
}
var x = 3;
var n = 2;
console.log(pow(x, n))
