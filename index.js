const arr = [1, 5, 3, 7, 9];
max = arr[0];
arr.forEach((val)=>{
  if(val>max){
    secmax = max
    max = val
  }
})
console.log(max);
console.log(secmax);
