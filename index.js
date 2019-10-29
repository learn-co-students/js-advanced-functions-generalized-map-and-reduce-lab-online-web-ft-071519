const map = function(array, func) {
    let result = [];
    for (const element of array) {
        result.push(func(element)) // Unique work
    }
    return result
};

const reduce = function(array, func, starting) {
    if (!starting) {
        starting = 0
    }
    let result = starting;
    for (const element of array) {
        result = func(element, result)
    }
    return result
};


// // reduceToTotal returns a running total when not given a starting point
// // reduceToTotal returns a running total when given a starting point

// const reduceToTotal = function(array, startingPoint = 0) {
//     let result = startingPoint;
//     for (const element of array) {
//         total += element
//     }
//     return result
// };
//
// // reduceToAllTrue returns true when all values are truthy
// // reduceToAllTrue returns false when any value is falsy

// const reduceToAllTrue = function (array) {
//     let result = true;
//     for (const element of array) {
//         if (element == false) {
//             result = false;
//             break;
//         }
//     }
//     return result
// };
//
// // reduceToAnyTrue returns true when a true value is present
// // reduceToAnyTrue returns false when no true value is present

// const reduceToAnyTrue = function (array) {
//     let result = false;
//     for (const element of array) {
//         if (element == true) {
//             result = true;
//             break;
//         }
//     }
//     return result
// };