// ES5
/* const arrRemoveDuplication = (Array) =>{
  let res = []
  for(var i =0;i<Array.length;i++){
    if(Array.indexOf(Array[i])===i){
      res.push(Array[i])
    }
  }
  return res
} */

// ES6
const arrRemoveDuplication = arr => [...new Set(arr)] 

const arr1 = [1,1,3,5,6,8,3,5,4,6,8,3]
const result = arrRemoveDuplication(arr1)
console.log(result)