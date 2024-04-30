function countDigits(n) {
    n = Math.abs(n)
    let count = 0;
    while (n > 0) {
        n = parseInt(n / 10);
        count++;
    }
    return count;
}


console.log(countDigits("1234udsdufgdfgh"))