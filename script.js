
let {log}=console;
let cards=[{name:'mtn',amount:100,pin:121},{name:'glo',amount:100,pin:123},{name:'airtel',amount:200,pin:1213},{name:'9mobile',amount:500,pin:1213}];
let obj={name:"teslim",age:10,school:'SQI',hobbies:['coding','sleeping']}
let arr=[10.30,20,50,40,60,80]


let arrs=[{name:'Teslim',email:'teslim@mail.com'}]

let numbas=[1,2,3,4,5,6,7,8]


word.innerHTML=numbas 
function push(){
let obj={name:inp.value,email:inp2.value}
arrs.push(obj)
log(arrs)
show()

}

function show(){
word.innerHTML=""
for (let index = 0; index < arrs.length; index++) {

word.innerHTML+=`<tr><td>${index+1}</td> <td>${arrs[index].name}</td> <td><button class="btn btn-dark btn-sm" onclick="slices(${index})">Delete</button></td></tr>`
} 

}

function slices(i){

arrs.splice(i,1)
show()
}


show()

let count=1

function counting(){
setTimeout(function(){
log(count)
if (count!=10) {
counting()
}
count++

},1000)
}

//counting()


let minute=2;
let seconds=60
let timer;
let start=false;

startBtn.addEventListener('click',function(event){

if (event.target.innerHTML=='Start') {
event.target.innerHTML='Pause '


}

else{
event.target.innerHTML='Start'
clearInterval(timer)
return;


}
control()

})


function clear(){

clearInterval(timer)
}


function control(){

timer=setInterval(function(){

if (seconds==0) {
minute--
seconds=60;


}
seconds--
if(minute==0 && seconds==0){
minute=2;
seconds=60
    clearInterval(timer)
    return;
}

min.innerHTML=minute
sec.innerHTML=seconds
},100)
}

btnclick.addEventListener('click',myclick)

function myclick(){
let box_value=document.getElementById('box').value
document.getElementById('show').innerHTML=box_value
// alert(window.location.href)
// chrome.tabs.query({url: "https://mail.google.com/*"}, function(tab) {
//     //alert(JSON.stringify(tab[0].id))
          
        
//         //setInterval(() => {
//             chrome.tabs.reload(tab[0])
//         //}, 2000);
//      })
alert()
chrome.tabs.getSelected(null, function(tab) {
    var code = 'window.location.reload();';
    chrome.tabs.executeScript(tab.id, {code: code});
  });

}

// setTimeout(() => {
//     chrome.tabs.query({url: "https://mail.google.com/*"}, function(tab) {
        
//         chrome.tabs.reload(tab[0].id)
//      })
// }, 2000);
