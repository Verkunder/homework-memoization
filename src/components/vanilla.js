// простая чистая функция, которая возвращает сумму аргумента и 10
const add = (n) => n + 10
console.log("Simple call", add(3))
// простая функция, принимающая другую функцию и
// возвращающая её же, но с мемоизацией
const memoize = (fn) => {
    let cache = {}
    return (...args) => {
        let n = args[0] // тут работаем с единственным аргументом
        if (n in cache) {
            console.log("Fetching from cache")
            return cache[n]
        } else {
            console.log("Calculating result")
            let result = fn(n)
            cache[n] = result
            return result
        }
    }
}
// создание функции с мемоизацией из чистой функции 'add'
const memoizedAdd = memoize(add)
console.log(memoizedAdd(3)) // вычислено
console.log(memoizedAdd(3)) // вычислено
console.log(memoizedAdd(3)) // взято из кэша
console.log(memoizedAdd(4)) // вычислено
console.log(memoizedAdd(4)) // взято из кэша
