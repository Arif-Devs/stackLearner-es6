let map = new Map([
    ['a', 10],
    ['b', 20],
    ['c', 30]
])

map.set('d', 40)
map.has('a')

console.log(map)

for (let [k, v] of map){
    console.log(v, k)
}