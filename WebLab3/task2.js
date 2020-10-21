// Реализуйте функцию sum
function sum() {
    let sum = 0;
    for (let i = 0; i < this.length; i++) {
        sum += this[i];
    }
    return sum;
}

console.log(sum.call([5, 5, 5, 5, 5, 5, 5, 5, 5]));
