class Member {
    constructor(name, age){
        this.name = name
        this.age = age
    }
    draw() {
        console.log('log Books')
    }
}

let names = new Member('arif', 30)
console.log(names.age)