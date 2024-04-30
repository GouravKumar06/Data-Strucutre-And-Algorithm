function countDigits(n) {
    let count = 0;
    while (n > 0) {
        n = parseInt(n / 10);
        count++;
    }
    return count;
}

console.log(countDigits(123457364))