let maximum=(values,greaterThan)=>{
  let result=[];
  for(let  val of values){
    if(val > greaterThan){
      result.push(val)
    }
  }
  return result
}

console.log (maximum([1,2,3,4,5], 3))
