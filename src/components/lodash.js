var _ = require("lodash")

var fibonacci = _.memoize(function (n) {
    return n < 2 ? n : fibonacci(n - 1) + fibonacci(n - 2)
})

var fibonacci1 = function (n) {
    return n < 2 ? n : fibonacci1(n - 1) + fibonacci1(n - 2)
}

var startTimestamp = new Date().getTime()
var result = fibonacci(1000)
var endTimestamp = new Date().getTime()
console.log(result + " in " + (endTimestamp - startTimestamp) + " ms")

startTimestamp = new Date().getTime()
result = fibonacci1(30)
endTimestamp = new Date().getTime()
console.log(result + " in " + (endTimestamp - startTimestamp) + " ms")
