// reverse a string


// let str="developer"
// let reverse=str.split("").reverse().join("")
// console.log(reverse)



// **2. Check if a string is a palindrome.**
// Input: "madam"
// Output: true

// let str="madam"
// let reverse=""
// for(let i=str.length-1; i>=0; i--){
// reverse+=str[i]
// }
// console.log(reverse)
// if(reverse==str){
//     console.log(true)
// }else{
//     console.log(false)
// }





// **4. Convert the first letter of each word to uppercase.**
// Input: "hello world"
// Output: "Hello World"

// let str="hello world"
// let splitstr=str.split(" ").map((word)=>word.charAt(0).toUpperCase()+word.slice(1).join(" "))
// console.log(splitstr)







// **5. Find the longest word in a sentence.**
// Input: "I love JavaScript programming"
// Output: "JavaScript"

// let str="I love JavaScript programming"
// let lengths=str.split(" ").map((word)=>word.length)
// let maxLen=Math.max(...lengths)

// let compare=word.find(word=>word.length==maxLen)
// console.log(compare)



// let str="I love JavaScriptssss programming"
// let strsplit=str.split(" ")
// let longest=""
// for(let i=0; i<strsplit.length; i++){
//     if(strsplit[i].length>longest.length)
//         longest=strsplit[i]
// }
// console.log(longest)










// **6. Count the number of words in a sentence.**
// Input: "This is a test"

// let str="This is a r r test"
// let strsplit=str.split(" ")
// let count=0
// for(let i=0; i<strsplit.length; i++){
// count++
// }
// console.log(count)






// **7. Remove all spaces from a string.**
// Input: "a b c d"
// Output: "abcd"

// let str="a b c d"
// let result=""
// for(let i=0; i<str.length; i++){
//     if(str[i]!==" ") result+=str[i]
// }
// console.log(result)



// **8. Replace all occurrences of a word in a string.**
// Input: "I love cats. Cats are great.", replace "Cats" with "Dogs"
// Output: "I love cats. Dogs are great."

// let str="I love cats. Cats are great."
// let splitstr=str.split(" ")

// for(let i=0; i<splitstr.length; i++){
//    if(splitstr[i]=='Cats')
//       splitstr[i]="dogs"
   

// }
// console.log(splitstr.join(" "))
