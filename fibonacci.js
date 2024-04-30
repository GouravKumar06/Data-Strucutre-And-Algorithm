
// 1. Fibonacci Sequence: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55
// print the number which present in nth position
function fibonacci(num) {
    let num1 = 0
    let num2 = 1

    let sum
    if(num === 1) return num1
    if(num === 2) return num2
    else if(num > 2)
    {
        for(let i = 3; i <= num; i++)
        {
            sum = num1 + num2
            num1 = num2
            num2 = sum
        }

        return num2
    }
    
}

console.log(fibonacci(10))


// 2. Fibonacci Sequence: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55
// print the series upto nth position
function fibonacciSeries(num) {
    let num1 = 0
    let num2 = 1
    let sum

    for(let i = 1; i <= num; i++)
    {
        console.log(num1)
        sum = num1 + num2
        num1 = num2
        num2 = sum
    }
}

fibonacciSeries(10)