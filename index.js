function map(sourceArray, fcn) {
    let newArray = [];
    sourceArray.forEach(element => {
        newArray.push(fcn(element))
    });
    return newArray
}

function reduce(sourceArray, fcn, startingValue = 0) {
    if (sourceArray.every(function(element){return typeof element === "number"})){
        let total = startingValue
        sourceArray.forEach(element => {
            total = fcn(element, total);
          });
          return total
    } else {
        let total = true
        sourceArray.forEach(element => {
            total = fcn(element, total);
          });
          return total
    }
}