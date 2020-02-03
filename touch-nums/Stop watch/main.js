var time = 0;
var status = 0;

function start(){
  status = 1;    
  timer();
    //document.getElementById("start").disabled =true;
}

function reset(){
 status = 0;
 time = 0;
 //document.getElementById("start").disabled = false;
 document.getElementById("timer").innerHTML = "00:00:00";
}

function stop(){
 status = 0;
// document.getElementById("start").disabled = false;
}

function timer(){
    
    if (status == 1){
      setTimeout(function(){
      time++;
      var min = Math.floor(time / 100/ 60);
      var sec = Math.floor(time /100);
      var mSec = time % 100;
          
          if (min < 10){
              min = "0" + min;
          }
          if (sec >= 60){
              sec = sec % 60;
          }
          if (sec < 10){
              sec = "0" + sec;
          }
         document.getElementById("timer").innerHTML = min + ":" + sec + ":" + mSec;
         timer();
          
      }, 10) 
}
}