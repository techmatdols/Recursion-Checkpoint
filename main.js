function isPalindrome(word) {
let reversed = "";
for(let i = word.length - 1; i >=0 ;  i--){
    reversed += word[i]
}
return word === reversed;
}


const word1 = "gag";
console.log(isPalindrome(word1))


const word2 = "kayak";
console.log(isPalindrome(word2))


const word3 = "php";
console.log(isPalindrome(word3))


const word4 = "radar";
console.log(isPalindrome(word4))


const word5 = "hello";
console.log(isPalindrome(word5))

function test(num) { 
  

    // Write your code below this line  
    
   
      return num/5
       }
     console.log(test(20))
    