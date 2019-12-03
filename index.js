// Add your functions here

function map(source, callback) {
    let a = []
    for (let i = 0; i < source.length; i++) {
        let x = source[i]
        a.push(callback(x))
    }
    return a
    
}

function reduce(source, callback, start) {
    let a = (!!start) ? start : source[0]
    let i = (!!start) ? 0 : 1
    for (; i < source.length; i++) {
        a = callback(source[i], a)
    }
    return a;
}
   

