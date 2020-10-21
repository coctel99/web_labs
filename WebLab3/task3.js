const object1 = {
	name: 'Boris',
	weight: 15
};

const object2 = {
	name: 'Boris',
	weight: 15
};

const object3 = {
	name: 'Rex',
	weight: 20,
};

// Реализуйте функцию isEquivalent
function isEquivalent(object1, object2) {
	if (object1.name === object2.name && object1.weight === object2.weight) {
		// Оператор строгого равенства("===") не приводит операнды к одному типу
		return true;
	} else {
		return false;
	}

}

console.log(isEquivalent(object1, object2)); // true
console.log(isEquivalent(object1, object3)); // false