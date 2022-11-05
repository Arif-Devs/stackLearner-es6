let person ={
    name: 'name: arif',
    email: 'email: arifur.sew@gmail.com',
    address: {city: 'dhaka', country: 'bangladesh'}
}

let {name, email, address: {city, country}} = person
console.log(name, email, city, country)