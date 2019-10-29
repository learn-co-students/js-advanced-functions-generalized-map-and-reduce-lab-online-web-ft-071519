const map = function(array, func) {
    let result = [];
    for (const element of array) {
        result.push(func(element)) // Unique work
    }
    return result
};

const reduce = function(array, func, starting) {
    if (!starting) {
        starting = array[0];
        array = array.splice(1)
    }
    let result = starting;
    for (const element of array) {
        result = func(element, result)
    }
    return result
};
