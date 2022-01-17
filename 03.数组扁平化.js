// 迭代递归思路
function flattening1(arr){
  if(!arr.length) return
  arr.forEach(item=>{
    if(Array.isArray(item)){
      arr = [].concat(...arr)
    }
  })
  return arr
}
// 普通递归
 function flatter(arr) {
  if (!arr.length) return;
  return arr.reduce(
    (pre, cur) =>
      Array.isArray(cur) ? [...pre, ...flatter(cur)] : [...pre, cur],
    []
  );
}

const arr1 = [[1,2],[3,4]]
console.log(flattening1(arr1))
console.log(flatter(arr1))