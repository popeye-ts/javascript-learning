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

function Drone(color, width, height){
    this.color = color;
    this.width = width;
    this.height = height;
}
var drone1 = new Drone('blue', 45, 23)


var truck = {
    size : 890,
    color : 'orange',
    company : function(){
        return this
    }
}

// prototype with constructor

function Apple (taste, color){
    this.taste = taste;
    this.color = color;
}
Apple.prototype = {
    eat : function(){return this},
    throw : function(){return 'apple is thrown'}
}
var apple1 = new Apple('sweet', 'light green')
var apple2 = new Apple('sour', 'green')

// for loop
var friends = ['john', 'lawerance', 'jaceb']
for(i = 0; i < friends.length; i++){
    console.log(friends[i])
}