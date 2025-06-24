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