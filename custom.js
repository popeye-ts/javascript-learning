let arr = [ 'ab', 1 , 'bd', 3, 'c' , 7];
// arr[1] = 3;
// arr[3] = 5;
// arr[6] = 9;

 
let newArr = arr.map(myFunction)

function myFunction(num){
    if(typeof num == "number")
    return num+2;
    return num;
}
document.querySelector('h2').innerHTML = newArr;


let array = ['hi', 4, 'kl', 8, 'tu', 6];

let newArray = array.map(myFunc);
function myFunc(val){
    if(typeof val == "number"){
        return val*4;
        return val;

    }
}
document.querySelector('h3').innerHTML = newArray;
// document.querySelector('h3').innerHTML = newArray;