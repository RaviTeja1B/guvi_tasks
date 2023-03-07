
// //odd numbers up  to given input using the arrow function
let odd1=()=>{
    let inputValue=parseInt(prompt())
     let arr=[]
     for (let i=0; i< inputValue;i++ ){
         if(i%2===1){
             //console.log(`odd number is ${i}`)
             arr=[...arr,i]
         }
        
     }
     return arr
 }
 console.log(odd1())


let capitalize1=((arr1,arr2,...arr3)=>{
    arr1=["ravi", "teja", "sam", "hari"]
    arr2=[]
    for( let i of arr1){
      let firstChar= i[0].toUpperCase()
     // console.log(firstChar)
      let Remaining=firstChar+i.slice(1)
       //console.log(Remaining)
       arr2=[...arr2,Remaining]
    }
    return arr2
   })
   console.log(capitalize1 ())  

//Adding all the numbers in a array
let stringNumber1=["10","20","30","40","50"]
let sum1=((...args)=>{
    let result=0
    for (let arg of args){
        result=result+parseInt(arg)
    }
    return result
})
console.log(sum1(...stringNumber1))



//prime number array
let primeNumber1=((m,n,count,arr=[])=>{
    for (let i=m;i<n;i++){
         count=0
        for(let j=2;j<i;j++){
            if(i%j===0){
                count++
            }
        }
        if(count===0&&count<2){
             arr=[...arr,i]
        }
   
    }
    return arr
})

console.log(primeNumber1(2,22))


//Return all the pallindromes in an array
const arr1 = ['carecar', 1344, 12321, 'did', 'cannot'];
const isPalindrome1 =((el )=> {
   const str = String(el);
   let i = 0;
   let j = str.length - 1;

   for (i=0;i<=j;) {
      if(str[i] === str[j]) {
         i++;
         j--;
      } else {
         return false;
      }
   }
   return true;
});
const findPalindrome1 = arr => {
   return arr.filter(el => isPalindrome1(el));
};
console.log(findPalindrome1(arr1));
//