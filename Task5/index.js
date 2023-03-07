//Functions
//A Resusable code snippet is called as a function.
//Odd numbers in the arrayl

// function odd(){
//    let inputValue=parseInt(prompt())
//     let arr=[]
//     for (let i=0; i< inputValue;i++ ){
//         if(i%2===1){
//             //console.log(`odd number is ${i}`)
//             arr=[...arr,i]
//         }
       
//     }
//     return arr
// }
// console.log(odd())
                  
                                                    
function capitalize(arr1,arr2,...arr3){
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
   }
   console.log(capitalize ())  
   
   
   
                                                   
   //Adding of all the numbers in an array
   let stringNumber=["10","20","30","40","50"]
   function sum(...args){
       let result=0
       for (let arg of args){
           result=result+parseInt(arg)
       }
       return result
   }
   console.log(sum(...stringNumber))
                                                       
   //Prime number Check
   function isPrime(n){
       if(n<2)
       return `${n} is not a prime`
       for (let i=2;i<n;i++){
           if(n%i===0){
               return`${n} is not a prime number`
           }
       }
       return `${n } is a prime number`
   }
   console.log(isPrime(42))
                                                          
   //prime number array
   function primeNumber(m,n,count,arr=[]){
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
   }
   
   console.log(primeNumber(2,22))
   
                                               
   //palindrome array
   const arr = ['carecar', 1344, 12321, 'did', 'cannot'];
   const isPalindrome = function(el ) {
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
   };
   const findPalindrome = arr => {
      return arr.filter(el => isPalindrome(el));
   };
   console.log(findPalindrome(arr));
   
   
   //Rotate an Array
   
   function rotate1(nums, k) {
       k = k % nums.length;
       for (let i = 0; i < k; i++) {
         const back = nums.pop();
         nums.unshift(back);
       }
       return nums;
     }
     let nums=[1,2,3,4,5]
     console.log(rotate1(nums,3))
   
   
     //Remove duplicates from an array
     let chars = ['A', 'B', 'A', 'C', 'B'];
   let uniqueChars = [...new Set(chars)];
   
   console.log(uniqueChars);
   
   
   //
   let chars1 = ['A', 'B', 'A', 'C', 'B'];
   
   let uniqueChars1 = chars1.filter((c, index) => {
       return chars1.indexOf(c) === index;
   });
   
   console.log(uniqueChars1);
   
   
   
   //
   let chars2 = ['A', 'B', 'A', 'C', 'B'];
   
   let dupChars = chars2.filter((c, index) => {
       return chars2.indexOf(c) !== index;
   });
   
   console.log(dupChars);
   
   //Sorted of two arrays of same length
   var findMedianSortedArrays = function(nums1, nums2) {
       const nums = nums1.concat(nums2)
       nums.sort( function(a,b) { return a - b; } )
       console.log(nums)
       if (((nums.length + 1) % 2 ) === 0){
            let median = (nums.length + 1)/2
            console.log(median)
             //find the index of the median in the array
            return nums[median - 1]
    //you need to subtract one from the index since arrays start at 0
        
        } else {
          let first = (nums.length/2) 
          console.log(first)
          //index of the first median
          let second = first + 1
          console.log(second)
          //index of the second median
          let med1 = nums[first - 1]
          console.log(med1)
          let med2 = nums[second - 1]
          console.log(med2)
          const median = (med1 + med2)/2 
          //calculate the average of the two medians 
          return median 
       }    
   };
   
   let num11=[5,6,5]
   let num12=[5,8]
   console.log(findMedianSortedArrays(num11,num12))
   //