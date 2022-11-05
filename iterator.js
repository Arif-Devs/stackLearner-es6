let  arr = [10, 20, 30]

function createIterator(collection){
    let i = 0
    return{
        next () {
            return{
                done: i => collection.length,
                value: collection[i++]
            }
        }
    }
}
   let iterate = createIterator(arr)
   
   console.log(iterate.next())
   console.log(iterate.next())

   /////////////////////////////////////////////////////

   let members =['arif', 'younus', 'ripon']

   let i = 0

   function list(nameList){
    return{
        next () {
            return{
                done: i => nameList.length,
                value: nameList [i++]
            }
        }
    }
   }

   let list1 = list(members)
  
  
   console.log(list1.next())
   console.log(list1.next())
   console.log(list1.next())

   ////////////////////////////////////////

   let dev = ['khokon', 'younus', 'habiba']

   let dev1 = dev[Symbol.iterator]()

  console.log(dev1.next())
  console.log(dev1.next())
  console.log(dev1.next())
  console.log(dev1.next())