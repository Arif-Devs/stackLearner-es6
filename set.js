let set = new Set([1,2,3])
set.add(4)
set.add(5)
console.log(set)

console.log(set.size)
console.log(set.clear)
console.log(set.has(4))
console.log(set.keys())


let keyIterate = set.keys()
console.log(keyIterate.next())