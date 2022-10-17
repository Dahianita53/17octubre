/* const callback = (element, index, a)=>{
 console.log(element, index, a)
 return element *2
}

const arr =[1, 5, 6, 8 ].map(callback)
console.log(arr)

const mayorA5 =(element)=>{
 if(element>5){
   return element 
 } else {
    return 0
 }
}

const arr=[1, 5, 6, 8].filter(mayorA5)
console.log(arr) */

const mayorA5 = (element) => {
    return element > 5

}
const arr = [1, 5, 6, 8].filter(mayorA5)
console.log(arr) 
