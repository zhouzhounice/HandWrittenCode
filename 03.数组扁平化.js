// 递归思路
function flattening(arr){
  if(!arr.length) return
  arr.forEach(item=>{
    if(Array.isArray(item)){
      arr = [].concat(...arr)
    }
  })
  return arr
}

const arr1 = [[1,2],[3,4]]
console.log(flattening(arr1))