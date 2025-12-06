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







// **10. Check if two strings are anagrams.**
// Input: "listen", "silent"
// Output: true

// let str1="listen"
// let str2="silenht"

// let s1=str1.split("").sort().join("")
// let s2=str2.split("").sort().join("")

// if(s1==s2){
//     console.log("yes its anagram")
// }else{
//     console.log("no its not")
// }





// **61. Access object properties using dot notation.**
// Input:
// const user = { name: "John", age: 30 }

// console.log(user.name)





//  Access object properties using bracket notation.**
// Input:
// const user = { name: "John", age: 30 };
// // Output:
// // 30
// console.log(user["age"])







// **63. Add a new key-value pair to an object.**
// Input:

// Add: obj.b = 2
// Output:
// { a: 1, b: 2 }


// let obj = { a: 1 };
// obj.b=2
// console.log(obj)












// **64. Delete a key from an object.**
// Input:

// Delete: delete obj.b
// Output:
// { a: 1 }

// let obj = { a: 1, b: 2 };
// delete obj.b
// console.log(obj)












// **65. Check if a key exists in an object.**
// Input: obj = { a: 1 }, key = "a"
// Output:
// true

// let obj={a:1}
// let key="a"
// console.log(key in obj)










// **66. Iterate over keys in an object.**
// Input: { x: 1, y: 2 }
// Output:
// x
// y

// let obj={x:1, y:2}
// for(let key in obj){
// console.log(key)
// }







// 1. Reverse an array.
// Input:

// Output:
// [5, 4, 3, 2, 1]

// const arr = [1, 2, 3, 4, 5];
// let reverse=[]
// for(let i=arr.length-1; i>=0; i--){
//     reverse.push(arr[i])
// }
// console.log(reverse)






// reverse in same array
// let arr=[1,2,3,4,5]
// for(let i=0; i<arr.length/2; i++){
//     let temp=arr[i]
//     arr[i]=arr[arr.length-1-i]
//     arr[arr.length-1-i]=temp
// }
// console.log(arr)











// 2. Flatten a nested array.
// Input:

// Output:
// [1, 2, 3, 4, 5]


// const arr = [1, [2, 3], [4, [5]]];
// let arr2=[]

// const flatternarr=(arr)=>{
//    arr.map((item)=>{
//     if(Array.isArray(item)){
//         flatternarr(item)
//     }else{
//        arr2.push(item)
//     }
//    })
// }
// flatternarr(arr)
// console.log(arr2)







// . Remove duplicate elements from an array.

//  [1, 2, 3, 4, 5]
// const arr = [1, 2, 2, 3, 4, 4, 5];
// let duparr=[]
// for(let i=0; i<arr.length; i++){
//     let found=false
//     for(let j=0; j<duparr.length; j++){
//        if(arr[i]==duparr[j]){
//        found=true
//        }
//     }
//     if(!found){
//         duparr.push(arr[i])
//     }
// }
// console.log(duparr)










// . Find the maximum value in an array.
// const arr = [3, 5, 7, 2, 8];
// let largest=[0]
// for(let i=0; i<arr.length; i++){
// if(arr[i]>largest){
//     largest=arr[i]
// }
// }
// console.log(largest)






// . Sum all elements in an array.


// Input:
// const arr = [1, 2, 3, 4];
// Output:
// 10

// let arr=[1,2,3,4]
// let sum=0
// for(let i=0; i<arr.length; i++){
// sum+=arr[i]
// }
// console.log(sum)









// 6. Merge two arrays.

// Input:
// const a = [1, 2];
// const b = [3, 4];
// let c=[]
// Output:
// [1, 2, 3, 4]

// for(let i=0; i<a.length; i++){
//     c.push(a[i])}
// for(let i=0; i<b.length; i++){
//     c.push(b[i])
// }
// console.log(c)







// 7. Rotate array to the right by 2 steps.


// Input:
// const arr = [1, 2, 3, 4, 5];
// Output:
// [4, 5, 1, 2, 3]


// const arr = [1, 2, 3, 4, 5];
// let k=2
// let n=arr.length
// let newarr=[]
// for(let i=n-k; i<n; i++){
//     newarr.push(arr[i])
// }
// for(let i=0; i<n-k; i++){
//     newarr.push(arr[i])
// }
// console.log(newarr)









// rotate array by left
// [3,4,5,1,2]
// let arr=[1,2,3,4,5]
// let newarr=[]
// let n=arr.length
// let k=2
// for(let i=n-k-1; i<n; i++){
// newarr.push(arr[i])
// }
// for(let i=0; i<n-k-1; i++){
//     newarr.push(arr[i])
// }
// console.log(newarr)







// Check if all elements are even.

// Output:
// true

// const arr = [2, 2, 3, 8];
// let found=true;
// for(let i=0; i<arr.length; i++){
    
//     if(arr[i]%2!==0){
//       found=false
//         break;
//     }
   
// }
// console.log(found)





