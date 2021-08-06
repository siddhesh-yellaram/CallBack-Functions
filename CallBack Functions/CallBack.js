function isOdd(n) {
    if (n % 2 != 0)
        return n;
}

function noGreaterThan25(n) {
    if (n > 25)
        return n;
}

function filterNos(n, fn) {
    var arr1 = [];
    for (var i = 0; i < n.length; i++) {
        arr1.push(fn(n[i]));
    }
    return arr1;
}

nos = [20, 30, 40, 11, 45];
console.log("New Odd Nos: " + filterNos(nos, isOdd));
console.log("New Nos Greater Than 25: " + filterNos(nos, noGreaterThan25));