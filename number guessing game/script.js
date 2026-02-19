let Playbtn = document.querySelector("#play");
let computerGuess = Math.floor(Math.random()*100)+1;

let count = 0;
Playbtn.addEventListener("click" , ()=>{

let compguess = document.querySelector("#heading4");


let guess= document.querySelector("#Inputnum");
guessInt = parseInt(guess.value);
let yourGuess = document.querySelector("#result")


let result = document.querySelector("#condition");


if(isNaN(guessInt) ){

    alert("ENTER THE VALID NUMBER 😊");

}


else if(computerGuess === guessInt && !isNaN(guessInt)){
    yourGuess.innerHTML = `YOUR GUESS : ${guessInt}`  ;
yourGuess.style.visibility = "visible";

compguess.innerHTML = `COMPUTER GUESS : ${computerGuess}`;  
compguess.style.visibility = "visible";
count++; 
result.innerHTML = `YOU GUESS CORRECT ❤️ ||  YOUR COUNT IS : ${count} 👌`;
result.style.visibility = "visible";

setTimeout(()=>{
location.reload();
},6000);


}

else if(computerGuess<guessInt && !isNaN(guessInt)){
    yourGuess.innerHTML = `YOUR GUESS : ${guessInt}`  ;
yourGuess.style.visibility = "visible";

    result.innerHTML = `GUESS LOWER 👇`;
    result.style.visibility = "visible";
   count++;

}

else if (computerGuess>guessInt && !isNaN(guessInt)){
    yourGuess.innerHTML = `YOUR GUESS : ${guessInt}`  ;
yourGuess.style.visibility = "visible";


     result.innerHTML = `GUESS HIGHER ☝️`;
     result.style.visibility = "visible";
     count++;
 

}

});