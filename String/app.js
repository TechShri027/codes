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









// **9. Find the first non-repeating character.**
// Input: "aabbcde"
// Output: "c"


// let str="aabbcde"
// let result=""
// for(let i=0; i<str.length; i++){
//     let count=0
//     for(let j=0; j<str.length; j++){
//         if(str[i]==str[j])count++
//     }

// if(count==1){
//     result=str[i]
//     break
// }
// }
// console.log(result)





// **10. Check if two strings are anagrams.**
// Input: "listen", "silent"
// Output: true

// let str1="listen"
// let str2="silent"

// let splitstr1=""
// let splitstr2=""

// for(let i=splitstr1.length-1; i>=0; i--){
    
// }








// reverse a string
// let str="helloh"
// let reversestr=""
// for(let i=str.length-1; i>=0; i--){
// reversestr+=str[i]
// }
// console.log(reversestr)











// **2. Check if a string is a palindrome.**
// Input: "madam"
// Output: true

// let str="madeam"
// let reverse=""
// for(let i=str.length-1; i>=0; i--){
//     reverse+=str[i]
// }
// if(reverse==str){
//     console.log(true)
// }else{
//     console.log(false)
// }





// **3. Count the number of vowels in a string.**
// Input: "developer"
// Output: 4


// let str="developer"
// let count=0
// for(let i=0; i<str.length; i++){
// count++
// }
// console.log(count)










// ```**4. Convert the first letter of each word to uppercase.**
// // Input: "hello world"
// // Output: "Hello World"

// let str="hello world"
// let result=str.split(" ").map((word)=>word.charAt(0).toUpperCase()+word.slice(1))

// console.log(result.join(" "))







// //  Find the longest word in a sentence.**
// // Input: "I love JavaScript programming"
// // Output: "JavaScript"

// let str="I love JavaScriptdddd programming"
// let longest=""
// let splitword=str.split(" ")
// for(let i=0; i<splitword.length; i++){
   
//     if(splitword[i].length>longest.length){
//         longest=splitword[i]
//     }
// }
// console.log(longest)












// **1. Reverse a string.**
// Input: "hello"

// let str="hello"
// let reverse=""
// for(let i=str.length-1; i>=0; i--){
// reverse+=str[i]
// }
// console.log(reverse)










// **2. Check if a string is a palindrome.**
// Input: "madam"

// let str="maedam"
// let reverse=""
// for(let i=str.length-1; i>=0; i--){
//     reverse+=str[i]
// }
// if(reverse==str){
//     console.log(true)
// }else{
//     console.log(false)
// }









// **3. Count the number of vowels in a string.**
// Input: "developer"

// let str="devEloper"
// let newstr=str.toLowerCase()
// let count=0
// for(let i=0; i<newstr.length; i++){
//     if(newstr[i]=="a" || newstr[i]=="e" || newstr[i]=="i" || newstr[i]=="o" || newstr[i]=="u"){
//         count++
//     }
// }
// console.log(count)









// Convert the first letter of each word to uppercase.**
// Input: "hello world"

// let str="hello world"
// let result=str.split(" ").map((word)=>word.charAt(0).toUpperCase()+word.slice(1))
// console.log(result.join(" "))







// Find the longest word in a sentence.**
// Input: "I love JavaScript programming"

// let str="I love JavaScript programming"
// let splitting=str.split(" ")
// let longest=""
// for(let i=0; i<splitting.length; i++){
//     if(splitting[i].length>longest.length){
//         longest=splitting[i]
//     }
// }
// console.log(longest)








//  Count the number of words in a sentence.**
// Input: "This is a test"
// let str="this is a test"
// let words=str.split(" ")
// let count=0
// for(let i=0; i<words.length; i++){
//    count++
// }
// console.log(count)





// Remove all spaces from a string.**
// Input: "a b c d"

// let str="a b c d"
// let word=""
// for(let i=0; i<str.length; i++){
//   if(str[i]!==" ")
// word+=str[i]
// }
// console.log(word)





// **8. Replace all occurrences of a word in a string.**
// Input: "I love cats. Cats are great.", replace "Cats" with "Dogs"

// let str="I love cats. Cats are great."
// let word=str.split(" ")

// for(let i=0; i<word.length; i++){
// if(word[i]=="Cats"){
// word[i]="Dogs"
// }
// }


// console.log(word.join(" "))








// **9. Find the first non-repeating character.**
// Input: "aabbcde"
// Output: "c"

// let str="aabbcde"
// for(let i=0; i<str.length; i++){
//     let count=0
//     for(let j=0; j<str.length; j++){
//         if(str[i]==str[j]){
//             count++
//         }
//     }
//     if(count==1){
// console.log(str[i])
// break;
//     }
// }








