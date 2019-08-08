'use strict';

// Unit link - http://web.archive.org/web/20190405104505/https://learn.javascript.ru/object#tasks

// Task 1
var user = {}
user.name = 'Вася';
user.surname = 'Смирнов';
user.name = 'Сергей';
delete user.name;

// Unit link - http://web.archive.org/web/20190405104505/https://learn.javascript.ru/object-for-in

// Task 1
function isEmpty (obj) {
	for(var key in obj) {
		return false;
	}
	return true;
}

var schedule = {}
console.log(isEmpty(schedule))

schedule['8:30'] = 'подъём';

console.log( isEmpty(schedule) );

// Task 2
var salaries = {
  "Вася": 100,
  "Петя": 300,
  "Даша": 250
};

let sum = 0
for(var key in salaries){
	sum += salaries[key]
}
console.log(sum)

// Task 3
var salaries = {
  "Вася": 100,
  "Петя": 300,
  "Даша": 550
};

 let max = 0;
 let maxName = '';
 for(var key in salaries) {
 	if(max < salaries[key]){
 		max = salaries[key];
 		maxName = key;
 	}
 }
 console.log(maxName || 'Объект пуст');

 // Task 4
 var menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

function multiplyNumeric(obj){
	for(var key in obj){
		if(isNumeric(obj[key])){
			obj[key] *= 2;
		}
	}
}

multiplyNumeric(menu);
console.log('width = ' + menu['width'] +' height = ' + menu['height'] + ' title = ' + menu['title']);
