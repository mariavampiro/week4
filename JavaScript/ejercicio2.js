// Strings

//a

var st1='mynameismaria';
console.log(st1.toUpperCase())

//b

var st2='mynameismaria';
var st3=st2.substring(5,0);
console.log(st3);

//c

var st4=st2.substring(10,st2.length);
console.log(st4);

//d

var st5=st2.substring(0,1).toUpperCase()+st2.substring(1,st2.length);
console.log(st5);

//e

var st6='hello world my name is maria'
var position=st6.indexOf(' ');
console.log(position);

//f

var st7='problematica ejercicios';
var st8=st7.substring(0,1).toUpperCase()+st7.substring(1,13)+st7.substring(13,14).toUpperCase()+st7.substring(14,st7.length);
console.log(st8);
