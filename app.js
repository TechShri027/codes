 /*
        // reverse of an array in another array
        const arr=[1,2,3,4,5]
        let reverse=[]
        for(let i=arr.length-1; i>=0; i--){
            reverse+=arr[i]+","
        }
        console.log(`[${reverse}]`)
*/












/*
//reverse of an array in same array
const arr=[90,91,92,93,94]
let temp;
for(let i=0; i<(arr.length-1)/2; i++){
    temp=arr[i]
    arr[i]=arr[arr.length-1-i]
    arr[arr.length-1-i]=temp
}
console.log(arr)

*/













// sum of arr
/*
const arr=[90,91,92,93,94]
let sum=0;
for(let i=0; i<=arr.length-1; i++){
    sum+=arr[i]
}
console.log(sum)
*/








//  Merge two arrays.
/*
const a=[1,2]
const b=[3,4]
let c=[]

for(let i=0; i<a.length; i++){
    c[i]=a[i]
}

for(let i=0; i<b.length; i++){
    c[a.length+i]=b[i]
}
console.log(`[${c}]`)
*/

















/*
// flattern array
let arr=[1,2,[3,4],5,6,[7,6,5],[1,[3],7],[9],8,[5,[6,[9]]]]
let new_arr=[]
// console.log(arr.flat(Infinity))
function flattern(arr){
arr.map((item)=>{
    if(Array.isArray(item)){
flattern(item)
    }else{
new_arr.push(item)
    }
})
}

flattern(arr)
console.log(new_arr)
*/








/*

//remove duplicate
const arr=[1,2,3,2,3,4,4,5,6,4,5,7,8,9,1,2]
const new_arr=[]


for(let i=0; i<arr.length; i++){
    let isDuplicate=false;
for(let j=0; j<new_arr.length; j++){
    if(arr[i]==new_arr[j]){
        isDuplicate=true;
        break
    }
}
if(!isDuplicate){
    new_arr[new_arr.length]=arr[i]
}
}
console.log(new_arr)
*/












/*
//rotate k elements by 2 right
let arr=[1,2,3,4,5]
let new_arr=[]
let k=2;
let n=arr.length

for(let i=n-k; i<n; i++){
new_arr[new_arr.length]=arr[i]
}
for(let i=0; i<n-k; i++){
    new_arr[new_arr.length]=arr[i]
}
     console.log(new_arr) 
*/

/*
//rotate k elements by 2 left

let arr=[1,2,3,4,5]
let new_arr=[]
let k=2;
let n=arr.length
for(let i=k; i<n; i++){
    new_arr[new_arr.length]=arr[i]
}
for(let i=0; i<k; i++){
     new_arr[new_arr.length]=arr[i]
}
   console.log(new_arr)   
   */  

   
        // largest element in array

      /*  let arr=[10,20,4,45,99]
        let largest=arr[0]

        for(let i=0; i<arr.length; i++){
            if(largest<arr[i]){
                largest=arr[i]
            }
        }
        console.log(largest)

 */


//  2nd largest array 

/*
let arr=[10,20,4,45,99,-2]
let largest=arr[0]
let seclargest=arr[0];
for(let i=0; i<arr.length; i++){
    if(largest<arr[i]){
        largest=arr[i]
    }
}
for(let i=0; i<arr.length; i++){
    if(seclargest<arr[i] && largest!=arr[i]){
        seclargest=arr[i];
    }
}
console.log(seclargest)

*/



// sec smallest element in array
/*
let arr=[10,20,4,45,99]
let smallest=arr[0]
let secsmallest=arr[0]

for(let i=0; i<arr.length; i++){
    if(smallest>arr[i]){
        smallest=arr[i]
    }
}

for(let i=0; i<arr.length; i++){
    if(secsmallest>arr[i]  && smallest!=arr[i]){
        secsmallest=arr[i]
    }
}
console.log(secsmallest)

*/









// check array sorted or not
/*
let arr=[1,2,3,4,5]
let ascending=true;
let descending=true;
function sorted(arr){
    for(let i=0; i<arr.length-1; i++){
    if(arr[i]>arr[i+1]){
      ascending= false;
}
if(arr[i]<arr[i+1]){
    descending=false;
}
}
return ascending||descending
}
console.log(sorted(arr))

*/



// reverse an array
/*
let arr=[1,2,3,4,5,6,7]
let temp;

    for(let i=0; i<arr.length/2; i++){
temp=arr[i]
arr[i]=arr[arr.length-1-i]
arr[arr.length-1-i]=temp;
}
console.log(arr)


*/


// largest element
/*
let arr=[10,20,40,89,5]
let largest=arr[0]
for(let i=0; i<arr.length; i++){
    if(largest<arr[i]){
        largest=arr[i]
    }
    
}
console.log(largest)
*/


// second largest
/*
let arr=[10,20,40,89,5]
let secondlargest=arr[0]
let largest=arr[0]
for(let i=0; i<arr.length; i++){
    if(largest<arr[i]){
        largest=arr[i]
    }
  
}
for(let i=0; i<arr.length; i++){
    if(secondlargest<arr[i] && largest!=arr[i]){
        secondlargest=arr[i]
    }
    
}
console.log(secondlargest)
*/


// smallest element
/*
let arr=[10,20,45,67,99,3]
let smallest=arr[0]
for(let i=0; i<arr.length; i++){
    if(smallest>arr[i]){
        smallest=arr[i]
    }
}
console.log(smallest)
*/

// secondlargest element
/*
let arr=[20,44,8,6,90,22]
    let smallest=arr[0]
let secsmallest=arr[0]
for(let i=0; i<arr[i]; i++){
    if(smallest>arr[i]){
        smallest=arr[i]
    }
}
for(let i=0; i<arr[i]; i++){
    if(secsmallest>arr[i] && smallest!=arr[i]){
        secsmallest=arr[i]
    }

}
console.log(secsmallest)
*/


// check if array is sorted in ascending
/*
let arr=[10,20,30,4,50]
let asc=true
let desc=true
function sorted(arr){
for(let i=0; i<arr.length-1; i++){
   if(arr[i]>arr[i+1]){
    asc=false
   }
   if(arr[i]<arr[i+1]){
desc=false
   }
}
return asc || desc


}
console.log(sorted(arr))

*/

// **Find an Element in an Array (Linear Search)**
//    - **Input:** `[10, 20, 30, 40, 50], key=30`
//    - **Output:** `Found at index 2`


/*
let arr=[10,20,30,40,50]
let key=30
for(let i=0; i<arr.length; i++){
    if(key===arr[i]){
        console.log("found at index "+i)
    }
}
*/





// binary search
/*
let arr=[10,20,30,40,50]
let key=4

function search(arr,key){
let start=0; let end=arr.length-1

while(start<=end){
    let mid=Math.floor((start+end)/2)

    if(arr[mid]==key){
        return mid;
    } else if(arr[mid]<key){
        start=mid+1;
    }else{
        end=mid-1
    }
}
return -1
}
console.log(search(arr,key))
*/




// // bubble sort
// let arr=[23,5,1,66,99,56]
// let n=arr.length;
// for(let i=0; i<n; i++){
//     for(let j=0; j<n-i-1; j++){
//         if(arr[j]>arr[j+1]){
//             [arr[j],arr[j+1]]=[arr[j+1],arr[j]]
//         }
//     }
    
// }
// console.log(arr)




/*
// selection sort
let arr=[23,5,1,66,90,56]
let n=arr.length
let j;
for(let i=0; i<n-1; i++){
    let smallest=i;
    for( j=i+1; j<n; j++){
        if(arr[j]<arr[smallest]){
            smallest=j
        }
    }
     if(smallest!==i){

    
        [arr[smallest],arr[i]]=[arr[i],arr[smallest]]
    
    }
}
    
    

console.log(arr)*/


















/*

// **Find the Largest Element in an Array**
//    - **Input:** `[10, 20, 4, 45, 99]`

let arr=[10,20,4,45,1099]
let largest=arr[0]
for(let i=0; i<arr.length; i++){
    if(largest<arr[i]){
        largest=arr[i]
    }
}
console.log(largest)

*/









/*

// 2. **Find the Second Largest Element in an Array**
//    - **Input:** `[10, 20, 4, 45, 99]`
//    - **Output:** `45
// 
// `

let arr=[10,20,4,45,99]
let largest=arr[0]
let secondlargest=arr[0]
for(let i=0; i<arr.length; i++){
    if(largest<arr[i]){
        largest=arr[i]
    }
}
for(let i=0; i<arr.length; i++){
    if(secondlargest<arr[i] && largest!=arr[i]){
        secondlargest=arr[i]
    }
    
}
console.log("2nd largest is "+ secondlargest + "and largest is "+ largest)


*/













/*
// remove duplicate array elemnts
let arr=[1,2,3,2,4,5,1,6]

function duplicate(arr){
    let uniquearr=[]
for(let i=0; i<arr.length; i++){
    let found=false;
    for(let j=0; j<uniquearr.length; j++){
        if(arr[i]===uniquearr[j]){
            found=true;
            break;
        }
       
    }
    if(!found){
        uniquearr.push(arr[i])
    }
   
}
return uniquearr;
}
console.log(duplicate(arr))


*/





/*
// remove duplicate from same array
let arr=[1,2,3,2,4,5,1,3,6]
for(let i=0; i<arr.length; i++){
    for(let j=i+1; j<arr.length; j++){
        if(arr[i]===arr[j]){
            for(let k=j; k<arr.length-1; k++){
            arr[k]=arr[k+1] 
            }
            arr.length--;
            j--
        }
    }
}
console.log(arr)
*/











/*
//  Reverse an array.
const arr=[1,2,3,4,5]
let reverse_arr=[]
for(let i=arr.length-1; i>=0; i--){
reverse_arr+=arr[i]+","
}
console.log(`[${reverse_arr}]`)
*/




/*
// reverse array in same

const arr=[1,2,3,4,5]
let temp;
for(let i=0; i<(arr.length)/2; i++){
temp=arr[i]
arr[i]=arr[arr.length-1-i]
arr[arr.length-1-i]=temp;
}
console.log(arr)
*/



// reverse an array in same array
/*
let arr=[1,2,3,4,5]
for(let i=0; i<(arr.length)/2; i++){
let temp=arr[i]
arr[i]=arr[arr.length-1-i]
arr[arr.length-1-i]=temp
}
console.log(arr)

*/


// reverse an array in different

// let arr=[1,2,3,4,5]
// let reverse=[]
// for(let i=arr.length-1; i>=0; i--){
//     reverse+=arr[i]
// }
// console.log(reverse)


// falttern nested array

// const arr = [1, [2, 3], [4, [5]]];

// function flattern(arr){
// arr.map((item)=>{
//     if(Array.isArray(item)){
//          flattern(item)
//     }else{
//         console.log(item)
//     }
// })
// }
// flattern(arr)






// remove duplicate array same array
// const arr = [1, 2, 2, 3, 4, 4, 5];
// for(let i=0; i<arr.length; i++){
//     for(let j=i+1; j<arr.length; j++){
//         if(arr[i]===arr[j]){
//             for(let k=j; k<arr.length-1; k++){
//                 arr[k]=arr[k+1]
//             }
//             arr.length--
//             j--
//         }
//     }
// }
// console.log(arr)



// remove duplicate array diff array
// const arr = [1, 2, 2, 3, 4, 4, 5];

// function remove(arr){
//     let uniquearr=[]
//     for(let i=0; i<arr.length; i++){
//         let found=false;
//         for(let j=0; j<uniquearr.length; j++){
//             if(arr[i]===uniquearr[j]){
//                 found =true
//                 break;
//             }
//         }
    
//     if(!found){
//         uniquearr.push(arr[i])
//     }
// }
//     return uniquearr
// }

// console.log(remove(arr))



// maxi
// const arr = [3, 5, 7, 2, 8];
// let max=arr[0]
// for(let i=0; i<arr.length; i++){
//     if(max<arr[i]){
//         max=arr[i]
//     }
// }
// console.log(max)




// 2nd largest
// const arr = [3, 5, 7, 2, 8];
// let max=arr[0]
// let max2=arr[0];
// for(let i=0; i<arr.length; i++){
//     if(max<arr[i]){
//         max=arr[i]
//     }
// }
// for(let i=0; i<arr.length; i++){
//     if(max2<arr[i] && max!=arr[i]){
//         max2=arr[i]
//     }
// }
// console.log(max2)



//  Sum all elements in an array.
// let arr=[1,2,3,4,5]
// let sum=0
// for(let i=0; i<arr.length; i++){
//     sum+=arr[i]
// }
// console.log(sum)


// check if all elements are even
/* const arr=[2,3,6,8]
 let flag=true;
for(let i=0; i<arr.length; i++){
   
    if(arr[i]%2 !==0){
        flag=false
        break;
    }
}

        console.log(flag)

        */

 //count occurance of a value
//  const arr=[1,2,2,3,2]
//   let count=0
//  for(let i=0; i<arr.length; i++){
   
//     for(let j=i+1; j<arr.length; j++){
//         if(arr[i]==arr[j]){
//           count++
//         }
//     }
   
//  } 
//   console.log(`${arr[i]} is occurred ${count+1}`)





// const a=[1,2]
// const b=[3,4]
// let i;
// let c=[]
// for( i=0; i<a.length; i++){
//     c[i]=a[i]
    
// }
// for(i=0; i<b.length; i++){
//     c[a.length+i]=b[i]
// }
// console.log(c[i])


// rotate arr by 2 
// let arr=[1,2,3,4,5]
// let k=2
// let n=arr.length
// let new_arr=[]

// for(let i=n-k; i<n; i++){
//     new_arr[new_arr.length]=arr[i]
// }
// for(let i=0; i<n-k; i++){
//     new_arr[new_arr.length]=arr[i]
// }
// console.log(new_arr)



// check all ele are eve
// let arr=[2,4,6,8,10]
// let flag=true
// for(let i=0; i<arr.length; i++){
//     if(arr[i]%2!==0){
//          flag=false
//          break
        
//     }
// }
// console.log(flag)






// 9. Count occurrences of a value.
// Output for value = 2:
// 3
// const arr = [1, 2, 2, 3, 2];
// for(let i=0; i<arr.length; i++){
//     let count=0
//      if (arr.indexOf(arr[i]) !== i) continue;
//     for(let j=0; j<arr.length; j++){
//         if(arr[i]==arr[j]){
//             count++
//         }
//     }
//     console.log('count is', count + 'of a number', arr[i])
// }







// 10. Find the index of the second occurrence of a value.

// Output for value = 5:
// 2
// const arr = [5, 1, 1, 2, 2];
// for(let i=0; i<arr.length; i++){
//     for(let j=i+1; j<arr.length; j++){
//         if(arr[i]==arr[j]){
//         return    console.log(`value is ${arr[i]} and index is ${j}`)
        
//         }
        
//     }
// }







// 11. Filter even numbers.
// Output:
// [2, 4]
// const arr = [1, 2, 3, 4, 5];
// let new_arr=[]
// for(let i=0; i<arr.length; i++){
//     if(arr[i] % 2==0){
//         new_arr[new_arr.length]=arr[i]
//     }
// }
// console.log(new_arr)



// 12. Sort an array in descending order.
// Output:
// [4, 3, 2, 1]
// const arr = [3, 1, 4, 2];
// for(let i=0; i<arr.length; i++){
// if(arr[i]<arr[i+1]){
// let temp=arr[i]
// arr[i]=arr[i+1]
// arr[i+1]=temp
// }
// }
// console.log(arr)






// 13. Find common elements in two arrays.
// Output:
// [2, 3]

// const a = [1, 6, 8];
// const b = [2, 3, 4];
// for(let i=0; i<a.length; i++){
//     for(j=0; j<b.length; j++){
//         if(a[i]==b[j]){
//             console.log(a[i])
//         }
//     }
// }




// **14. Find unique elements from two arrays.**
// Output:
// [1, 2, 4, 5]
// const a = [1, 2, 3];
// const b = [3, 4, 5];
// let c=[]
// for(let i=0; i<a.length; i++){
//     let found=false;
//     for(let j=0; j<b.length; j++){
//         if(a[i]===b[j]){
// found =true
// break;
//         }
//     }
//     if(!found){
//         c.push(a[i])
//     }
// }
// for(let i=0; i<b.length; i++){
//     let found=false
//     for(let j=0; j<a.length; j++){
//         if(b[i]===a[j]){
//             found = true
//             break
//         }
//     }
//     if(!found){
//         c.push(b[i])
//     }
// }
// console.log(c)












// **15. Remove falsy values from an array.**
// Output:
// ["a", 5]
// const arr = [0, "a", "", false, 5];
// for(let i=0; i<arr.length; i++){
//     if(arr[i]===0 || arr[i]===false || arr[i]===""){
//         for(let j=i; j<arr.length; j++){
//             arr[j]=arr[j+1]
//         }
//         arr.length--
// i--;
//     }
// }
// console.log(arr)


// **17. Find the longest string in an array.**

// Output:
// "abcd"
// const arr = ["a", "abcd", "abc"];
// let longest=""
// for(let i=0; i<arr.length; i++){
//     if(arr[i].length>longest.length){
//         longest=arr[i]
//     }
// }
// console.log(longest)





// **19. Find second largest number.**

// Output:
// 7
// const arr = [5, 3, 9, 7];
// let largest=arr[0]
// let sec_longest=arr[0]
// for(let i=0; i<arr.length; i++){
//     if(largest<arr[i]){
//         largest=arr[i]
//     }
// }
// for(let i=0; i<arr.length; i++){
//     if(sec_longest<arr[i] || largest!==arr[i]){
//         sec_longest=arr[i]
//     }
// }
// console.log(sec_longest)





// **20. Find missing number from a sequence.**

// Output:
// 3
// const arr = [1, 2, 4, 5];
// let missing;
// for(let i=0; i<arr.length; i++){
//     if(arr[i+1]-arr[i]!==1){
// missing=arr[i]+1
// break
//     }
// }
// console.log(missing)









// 21. Remove first and last element.
// Output:
// [2, 3]

// const arr = [1, 2, 3, 4];
// let new_arr=[]
// for(let i=1; i<arr.length-1; i++){
//     new_arr[new_arr.length]=arr[i]
// }
// console.log(new_arr)





// 22. Find intersection without duplicates.
// Output:
// [2, 3]
// const a = [1, 2, 2, 3];
// const b = [2, 2, 3];
// let new_arr=[]
// for(let i=0; i<a.length;i++){     //2
//     for(let j=0; j<b.length; j++){   //2
//         if(a[i]==b[j]){    
//             let existed=false
//             for(let k=0; k<new_arr.length; k++){   
//                 if(new_arr[k]==a[i]){   
//                     existed=true;
//                     break
//                 }
//             }

// if(!existed){
//   new_arr[new_arr.length]=a[i]  
// }
//         }
//     }
// }
// console.log(new_arr)






// 16. Chunk an array into smaller arrays.

// chunk size = 2
// Output:
// [[1, 2], [3, 4], [5]]
// const arr = [1, 2, 3, 4, 5];
// let temp=[]
// let result=[]
// let chunk=2
// for(let i=0; i<arr.length; i++){
//     temp.push(arr[i])

//     if(temp.length==chunk){
//         result.push(temp)
//         temp=[]
//     }
// }
// if(temp.length>0){
//     result.push(temp)
// }
// console.log(result)






// . Convert array to object using index as key.

// Output:
// {0: 'a', 1: 'b'}
// const arr = ['a', 'b'];
// let obj={}
// for(let i=0; i<arr.length; i++){
//     obj[i]=arr[i]
// }
// console.log(obj)



// Replace every element with its square.

// Output:
// [1, 4, 9]
// const arr = [1, 2, 3];
// for(let i=0; i<arr.length; i++){
//     arr[i]=arr[i]*arr[i]
// }
// console.log(arr)







// 24. Find average of elements.

// Output:
// 5
// const arr = [2, 4, 6, 8];
// let sum=0
// for(let i=0; i<arr.length; i++){
//      sum+=arr[i]
// }
// console.log(Math.round(sum/(arr.length-1)))





// console.log(this)     //node environment empty    //browser me window



// function show(){
//     console.log(this)   //global object
// }
// show()



// const show=()=>{
//     console.log(this)      //empty
// }
// show() 


// const obj={
//     username:"shrishti",
//     password:"123",

//     // show(){
//     //     console.log(this)
//     // }


//     show: ()=> console.log(this.username)
    
// }
// obj.show()


// const arr1 = [1, 2, 3];
// const arr2 = arr1;

// console.log(arr1 === arr2); 



// const arr1 = [1, 2, 3];
// const arr2 = [1, 2, 3];

// console.log(arr1 == arr2); // false


// const obj1 = { name: "Shrishti" };
// const obj2 = { name: "Shrishti" };

// console.log(obj1 == obj2); // false


// console.log(3+5+"7")







// Convert string to boolean.**
// Input: "true"
// Output: true


let str="true"
console.log(Boolean(str))
