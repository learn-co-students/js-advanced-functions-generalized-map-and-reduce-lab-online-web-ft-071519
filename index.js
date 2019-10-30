function map(array, fn) {
    let transformed = [];

    array.forEach(ele => {
      transformed.push(fn(ele))
    })
    return transformed;
}

function reduce(array, fn, start) {
    let accumulator
    let newArray = [...array]
    if (start) {
        accumulator = start
    } else {
        accumulator = array[0]
        newArray.shift()
    }
    newArray.forEach(memo => {
        accumulator = fn(accumulator, memo)
    })
    return accumulator
}



// state = {
//     total: 0,
//     color: 'red'
// }

// action is an object with a key called 'type'

// function reducer(oldState, action){
//     switch(action.type) {
//         case "increment":
//             return {...oldState, total: oldState.total + action.amount}
//         case "decrement":
//             return {...oldState, total: oldState.total - action.amount}
//         case "reset":
//             return {...oldState, total: 0}
//         default:
//             return oldState
//     }
// }


// state = reducer(state, {type: "increment", amount: 4})