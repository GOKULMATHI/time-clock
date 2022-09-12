const bdy=document.getElementById("body");
const t=document.getElementById("time");
const d=document.getElementById("date");

const sech=document.getElementById("second");

var time = new Date();
var secs = time.getSeconds();

console.log(sech);
 

function timedisplay(){
    var time = new Date();
    hour = time.getHours();
    t.innerHTML="TIME:"+time.getHours()+":"+time.getMinutes()+":"+time.getSeconds();
    d.innerHTML=time.getDate()+"."+time.getMonth()+"."+time.getFullYear();
    setTimeout(timedisplay, 1000);
}

timedisplay();

// setInterval( ()=>{
//     let i = time.getSeconds();
//     sech.style.transformOrigin="0 100% 0";
//     sech.style.transform="rotate("+i*6+"deg)";
// },1000);

function clockdsply(){
    let i = time.getSeconds();
    sech.style.transformOrigin="0 100% 0";
    sech.style.transform=`rotate(`+i*6+`deg)`;
}
setTimeout(clockdsply(),1000);
setInterval(clockdsply(),1000);

// setInterval(() => {
//     i = time.getSeconds(); 
//     sec_rotation = 6 * i; //Converting second
//     sech.style.transformOrigin="0 100% 0";
//     sech.style.transform = `rotate(${sec_rotation}deg)`;
//   }, 1000);

