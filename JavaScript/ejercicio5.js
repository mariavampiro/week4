// For

//a

var object = ['pera','banana','manzana','sandia','melon'];

for (var i=0;i<object.length;i++) {
  alert(object[i]);
}

//b

for (var i=0;i<object.length;i++){
    alert(object[i].substring(0,1).toUpperCase()+object[i].substring(1,object[i].length));
}

//c

var sentence = '';
for (var i=0;i<object.length;i++){
    sentence=object.join('');
}
alert(sentence);

//d

let array=[];
for(let i=0;i<10;i++){
    array[i]=i;
}
console.log(array);
