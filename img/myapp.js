var pHello = document.getElementById('hello');
    
pHello.innerText = "new world";

pHello.innerHTML += " order <span>hello world</span>";

pHello.outerHTML = '<h2 id="hello">new world order <span>hello world</span></h2>';

var spanH1 = document.querySelectorAll('h1 span');

spanH1[0].innerHTML = "new text here!!";
// if(confirm("hello")){
//     location.href="https://facebook.com"
// }
// for (let node of document.body.childNodes) {
//     alert(node); // shows all nodes from the collection
//   }
// let divs = document.querySelectorAll('div');
// alert(divs.length);  
// var name=prompt("entername");
// alert("nameis"+name);
// function myapp(){
//     let k=1;
//     if(k==1){
//         alert("in app");
//     }
// }
// // myapp();
// let sum=(a,b)=>a+b;
// alert(sum(2,3));
// abc="his";
// confirm(abc);
// ask("yoyag",'agreed','cancel');

// let ask=(question,yes,no)=>{
//  confirm(question)
// //  alert($[yes]);}
// //  else{
// //  alert($[no]);}
// }
// let user={
//     name:"john",
//     age:30
// };
// alert(user.name);



// let fruit = prompt("Which fruit to buy?", "apple");

// let bag = {
//   [fruit]: 5, // the name of the property is taken from the variable fruit
// };

// alert( bag.apple )
// arr=[0,1,2,3,4]
// c=arr.splice(0,2,10,11);
// b=[25,26];
// b.concat(3,4);
// alert(b);
// arr=[2,3,4,1];
// arr.sort();
// alert(arr);
// arr.reverse();
// alert(arr);
// name='bdhb,dchj,djc';
// arr=name.split(',');
// alert(arr[0]);
// setTimeout(alert('hi'),5000);
// let timer=setInterval(()=>alert('hi'),10000);
// clearInterval(timer);
