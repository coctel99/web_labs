function createCounter() {
    // Реализуйте функцию, чтобы программа вывела на консоль ожидаемый результат
    let counter = 0;
    return function () {
        return counter = counter + 1;
    }
}

const count = createCounter();
count(); // 1
count(); // 2
count(); // 3
count(); // 4

console.log(count()); // 5