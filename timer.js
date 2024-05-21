

// let tag=document.getElementById("timer");

// console.log(tag.innerText);

// let date=new date().getTime();
// get




// function timer(){
//     let second=0;
//     let min=0;
//     let hour=0;

//     const time=setInterval(()=>{

//         if(second>60){
//             min++;
//             second=0;
//         }
        
//         if(min>60){
//             hour++;
//             min=0;

//         }
//         console.log(second)
//         console.log(min)
//         let minutes=min<10?`0${min}`:`${min}`
//         let seconds=second<10?`0${second}`:`${second}`
//         let hours=hour<10?`0${hour}`:`${hour}`
//         let days=0;



//         second++;
//         tag.innerText=`${days}      :        ${hours}        :  ${minutes}        :      ${seconds}`
        



//     },1000)
// }

// timer();

var countDownDate = new Date("June 20, 2024 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

    
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hour = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var min = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var second = Math.floor((distance % (1000 * 60)) / 1000);

   let minutes=min<10?`0${min}`:`${min}`
   let seconds=second<10?`0${second}`:`${second}`
   let hours=hour<10?`0${hour}`:`${hour}`
    
  // Output the result in an element with id="demo"
  document.getElementById("demo").innerHTML = `${days}      :        ${hours}        :  ${minutes}        :      ${seconds}`;
    
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x); 
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);


