// 1. Функция debounce
function debounce(func, delay) {
    let timeout
    return function () {
        clearTimeout(timeout)
        timeout = setTimeout(() => {
            func()
        }, delay);
    }
}

const debouncedFunction = debounce(() => {
    console.log('Вызвана функция с задержкой');
}, 2000);
debouncedFunction();
debouncedFunction();



// 2. Глубокое клонирование объекта
function deepClone(obj) {
    return JSON.parse(JSON.stringify(obj)) // решение для объектов формата JSON (не имеющих методов)
}
// Пример:
const original = {
    name: 'John',
    address: {
        city: 'New York',
        country: 'USA',
    }
};
const copy = deepClone(original);
copy.address.city = 'Los Angeles';
console.log(original.address.city); // New York (оригинальный объект не должен измениться)
console.log(copy.address.city); // Los Angeles
console.log(original);
console.log(copy);
