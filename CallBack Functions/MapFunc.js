function mapNos(nos, fn) {
    var arr1 = [];
    for (var i = 0; i < nos.length; i++) {
        arr1[i] = fn(nos[i]);
    }
    return arr1;
}

function addCube(n) {
    return n * n * n;
}

function addSq(n) {
    return n * n;
}

function add50(n) {
    return n + 50;
}

var nos = [1, 2, 3, 4];
console.log(mapNos(nos, addCube));
console.log(mapNos(nos, addSq));
console.log(mapNos(nos, add50));