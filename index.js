function map(array, fn) {
    let transformed = [];

    array.forEach(ele => {
      transformed.push(fn(ele))
    })
    return transformed;
}

function reduce(array, fn, start = 0) {
    if (start) {
        let accumulator = start
    } else {
        let accumulator = array[0]
    }

    
}