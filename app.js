
let audio = document.getElementById('dice-audio');

roll = () => {

    audio.play();

    let toss = Math.random();
    
   
    
    
    if (toss < 0.2) {
        document.getElementById("result").innerHTML = "1";
    }
    
   else if (toss < 0.35) {
        document.getElementById("result").innerHTML = "2";
    }
    
    else if (toss < 0.5) {
        document.getElementById("result").innerHTML = "3";
    }
    
    else if (toss < 0.65) {
        document.getElementById("result").innerHTML = "4";
    }
    
    else if (toss < 0.85) {
        document.getElementById("result").innerHTML = "5";
    }
    
    
    else {
        document.getElementById("result").innerHTML = "6";
    }
       
    
    } 
    
    
    
    