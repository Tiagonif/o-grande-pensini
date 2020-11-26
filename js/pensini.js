console.log("welcome");

let ledboard = [];

let minValue = 1;
let maxValue = 200;

let guess = (minValue + maxValue) / 2;

let minValueElement = undefined;
let maxValueElement = undefined;
let guessValueElement = undefined;

let interval = undefined;
let changeCallcount = 0;

let change = function(){
    let colors = ['#ef4fdf','#16a5e2','#17A589','#D35400','#6C3483'];

    changeCallcount++;
    if(changeCallcount > 100){
        clearInterval(interval);
        changeCallcount = 0;

        window.location.reload();
    }

     ledboard.forEach(function(x){
        x.style.backgroundColor = colors [Math.floor(Math.random() * colors.length)];
    });
}

let writeGuessTOHTML = function() {
    guessValueElement.innerHTML = Math.round(guess);
    }

    let onButtonlowerPressed = function() {
        maxValue = guess;
        guess = (minValue + maxValue) / 2;

        writeGuessTOHTML();
    }

    let onButtonHigherPressed = function() {
        minValue = guess;
        guess = (minValue + maxValue) / 2; 
        
        writeGuessTOHTML();
    }

    let onButtonSuccessPressed = function(){
        console.log("Eureka");
        
        let victoryDiv = document.getElementById("victory");
        victoryDiv.classList.remove("d-none");

        interval = setInterval(change, 100);
    }

let main = function() {
   ledboard = Array.from(document.getElementsByClassName("block"));


   minValueElement = document.getElementById("minValue");
   maxValueElement = document.getElementById("maxValue");

   guessValueElement = document.getElementById("guess");

   minValueElement.innerHTML = minValue;
   maxValueElement.innerHTML = maxValue;

   writeGuessTOHTML();

  

}

main();