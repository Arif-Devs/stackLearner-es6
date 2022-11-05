 let arr = [1, 2, 3, 4, 5]
 for(let v of arr ){
    console.log(v)
 }

 for (let v of 'arif'){
    console.log(v)
 }

 /*function cal(...number){
   let sum = 0
   for (let i of number){
      sum = sum +i
   }
   console.log(sum)
 }

 cal(1,2,3,4,5,6,7)*/


 function cal(...number){
      for(let i of number){
   }
      console.log(number)
 }

 cal(1,2,3,4,5,6,7)

 var myCountry = ['dhaka', 'rangpur', 'chittagong']

 for (let city of myCountry){
   console.log(city)
 }