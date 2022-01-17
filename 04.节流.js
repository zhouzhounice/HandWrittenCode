// 规定在一定时间内触发一次。如果在一定时间内触发多次 则只有一次生效
// 使用场景：1.监听滚动条是否滑动到最底部 2.监听鼠标移动
function throttle(fn , wait){
 let pre = new Date();
 return function(){
   const args=arguments;
   const newTime = new Date()
   if(newTime-pre>wait){
     fn.apply(this,args)
     pre = new Date()
   }
 }
}

const fn1 = (v) =>{
  console.log(v)
}

console.log(throttle(fn1,200))