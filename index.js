// Add your functions here

function map(sA, fn) {
    let result = []

    for (let i = 0; i < sA.length; i++){
        result.push(fn(sA[i]))
    }
    return result
}

function reduce(sA, fn, start) {
    let result = (!!start) ? start : sA[0]
    if (result === start) {
        for (let i = 0; i < sA.length; i++){
            result = fn(sA[i], result)
        }
        return result
    }
    else {
        for (let i = 1; i < sA.length; i++){
            result = fn(sA[i], result)
        }
        return result
    }
}