//  Задание 1: Основные алгоритмические задачи(1 час)
// 1. Проверка на палиндром

const isPalindrome = (str) => str === str.split('').reverse().join('')

isPalindrome("А роза упала на лапу Азора"); // true
isPalindrome("Привет"); // false

// 2. FizzBuzz

const fizzBuzz = () => {
    for (let i = 1; i < 101; i++) console.log((i % 3 ? '' : 'Fizz') + (i % 5 ? '' : 'Buzz') || i)
}

fizzBuzz()

// 3. Разбиение массива на части

const chunkArray = (array, size) => array.reduce((acc, n, i) => ((i % size) || acc.push([]), acc[acc.length - 1].push(n), acc), [])

console.log(chunkArray([1, 2, 3, 4, 5, 6, 7, 8], 2)) // [[1, 2], [3, 4], [5, 6],[7, 8]]

console.log(chunkArray([1, 2, 3, 4, 5, 6, 7, 8], 3)) // [[1, 2, 3], [4, 5, 6],[7, 8]]

