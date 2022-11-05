let add = (a, b) => a + b 
console.log(add(10, 10))

let num = x => x*x
console.log(num(10))


let obj = {
    name: 'arif',
    print: function(){
        setTimeout(function(){
            console.log(`hello, ${this.name}` )
        },1000)
    }
}
obj.print()

let obj1 = {
    name: 'arif',
    print: function(){
        let self = this
        setTimeout(function () {
            console.log(`hello, ${self.name}` )
        }, 1000)
    }
}
obj1.print()

let obj2 = {
    name: 'arifur rahman',
    print: function(){
        setTimeout(function(){
            console.log(`hello, ${this.name}`)
        }.bind(this), 1000)
    }
}
obj2.print()

let obj3 = {
    name: 'arif rhaman',
    print: function(){
        setTimeout(() => {
            console.log(`hello, ${this.name}` )
        },1000)
    }
}
obj3.print()

let name = {
    name1: 'rahman',
    print: function (){
        setTimeout(() => {
            console.log(`hi ${this.name1}`)
        }, 1000)
    } 
}
name.print()

let member = {
    name: 'arif',
    prefession: 'web dev',
    print: function(){
        setTimeout(() => {
            console.log(`His name ${this.name} and he is a ${this.prefession}`)
        }, 1000)
    }
}
    
member.print() 





























