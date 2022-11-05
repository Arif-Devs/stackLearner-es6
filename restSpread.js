function a (){
    a = 0
    for (let i = 0; i < arguments.length; i++) {
        a += arguments[i]
    }
    return a
}

console.log(a(1, 2, 3, 4, 5))

//rest

function sum (...rest){
    return rest.reduce((a, b) => a +b)
}
console.log(sum(1, 2, 3,))

//spread 

let b = [1, 2, 3, 4, 5]
console.log(...b)

let obj = {
    a: 10,
    b: 20,
    c: 30
}

let obj2 = {
    ...obj
}