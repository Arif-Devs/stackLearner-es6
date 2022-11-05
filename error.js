function changeToInt (v){
    let result = Number.parseInt(v)
    if(!result){
        return 'please provide a number'
    }
    return result
}

let result = changeToInt('sdf45')
console.log(result)