/*class member{
    draw(){
        console.log('members data')
    }
}

class name extends member{
    
    constructor(name, age) {
        super()
        this.name = name
        this.age = age
    }
    calculate() {
        return this.name, this.age
    }
}

let data = new name('arif', 30)
console.log(data)
data.draw()*/

/////////////////////////////

class member{
    constructor(job){
        this.job = job
    }
    draw(){
        console.log('members data')
    }
}

class name extends member{
    
    constructor(name, age, job) {
        super(job)
        this.name = name
        this.age = age
    }
    calculate() {
        return this.name, this.age
    }
}

let data = new name('arif', 30, 'web developer')
console.log(data)
data.draw()