function startTime(){
    const today = new Date();

    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();

    
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;

    let session = "AM";

     if(h>=12){
        session= "PM"
    }

    if(h>12){
        h = h-12;
    }

   

   let time = document.querySelector("#para");
    time.innerText = h + ":" + m + ":" + s + " "+ session


        setTimeout(startTime, 1000);
      

    }
      document.addEventListener("DOMContentLoaded", startTime);







