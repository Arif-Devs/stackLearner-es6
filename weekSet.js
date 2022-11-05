let a={a: 10}, b={b: 20}
let set = new Set([a, b])
a = null
console.log(set)
console.log(set.has(a))
console.log(set.has(b))