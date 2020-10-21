let User = function (name) {
	this.name = name;
	let user = this; // иначе будет возвращать undefined
	return {
		getName: function () {
			return user.name
		}
	}
};

// Допишите код здесь, чтобы программа вывела на консоль ожидаемый результат

const me = new User('Rex');

console.log(me.getName()); // Rex