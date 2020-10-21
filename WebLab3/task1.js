const ITMO_BORN_YEAR = 1990;
const ITMO_BORN_MONTH = 2; // Исправено на 2
const ITMO_BORN_DAY = 26;

// Допишите код здесь, чтобы программа вывела на консоль ожидаемый результат
let ITMO_BORN_DATE = new Date(ITMO_BORN_YEAR, ITMO_BORN_MONTH, ITMO_BORN_DAY);
console.log(ITMO_BORN_DATE.toDateString()); // Mon Mar 26 1990