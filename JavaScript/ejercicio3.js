// Arrays

//a

let arr=["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
let month5=arr[4];
let month11=arr[10];
console.log(month5,month11);

//b

console.log(arr.sort());

//c

arr.unshift('hello');
arr.push('world');
console.log(arr);

//d

arr.shift();
arr.pop();
console.log(arr);

//e

arr.reverse();
console.log(arr);

//f

var stjoin=arr.join('-');
console.log(stjoin);

//g

let arr2=arr.slice(4,10);
console.log(arr2);