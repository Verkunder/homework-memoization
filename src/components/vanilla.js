// простая чистая функция, которая возвращает сумму аргумента и 10
const add = (n) => n + 10
console.log("Simple call", add(3))
// простая функция, принимающая другую функцию и
// возвращающая её же, но с мемоизацией
const memoize = (fn) => {
    let cache = {}
    const cached = (args, reset = cache) => {
        let n = args // тут работаем с единственным аргументом
        cache = reset
        if (n in cache) {
            console.log("Fetching from cache")
            return cache[n]
        } else {
            console.log("Calculating result")
            let result = fn(n)
            cache[n] = result
            return result
        }
        return cache
    }
    const clearCache = () => {
        cache = {}
    }
    cached.cache = cache
    return [cached, clearCache]
}
// создание функции с мемоизацией из чистой функции 'add'
const [cached, clearCache] = memoize(add)
console.log(cached(3)) // вычислено
console.log(clearCache()) // вычислено
console.log(cached(3)) // взято из кэша
console.log(cached(4)) // вычислено
console.log(cached(4)) // взято из кэша
