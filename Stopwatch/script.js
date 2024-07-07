//A STOPWATCH IN JS
const timeDisplay = document.querySelector('#timeDisplay');
const startBtn = document.querySelector('#startBtn');
const pauseBtn = document.querySelector('#pauseBtn');
const resetBtn = document.querySelector('#resetBtn');


let startTime = 0;
let elapsedTime = 0;
let curentTime = 0;
let paused = true;
let intervalId;
let hrs = 0;
let mins = 0;
let secs = 0;

//addEventListeners to each buttons
startBtn.addEventListener('click', () => { 
    //check to see if pasued is true
    if(paused) {
        paused = false; //take pause and set it to false

        //calculate the start time[it gives the current date and time in milliseconds]
        startTime = Date.now() - elapsedTime;

        //now begin the timer and invoke it every 75 milliseconds
        intervalId = setInterval(updateTime, 75) //takes in a callback function and the time

    }
});
pauseBtn.addEventListener('click', () => {
    //check to see if not paused, set it to true and calculate the elapsed time
    if(!paused) {
        paused = true;
        elapsedTime = Date.now() - startTime;

        //clear the setInterval method
        clearInterval(intervalId); 

    }

});
resetBtn.addEventListener('click', () => {
    //set pasued to true
    paused = true;

    //clear the timer
    clearInterval(intervalId);

    //set everything to its original value[which is zero];
    startTime = 0;
    elapsedTime = 0;
    curentTime = 0;
     hrs = 0;
    mins = 0;
    secs = 0;

    //change the TimeDispay to zeros
    timeDisplay.textContent = '00:00:00';

});

//declare a function to update the time

function updateTime() {
    //calculate how much time has passed []
    elapsedTime = Date.now() - startTime;  //elapsedTime equals whatever time it is right now - the original time[in milliseconds]
     
    //format it to display it within the timer[calculate the mins, hours and secs]
    secs = Math.floor((elapsedTime / 1000) % 60);
    mins = Math.floor((elapsedTime / (1000 * 60)) % 60);
    hrs = Math.floor((elapsedTime / (1000 * 60 * 60)) % 60);
    
   

//2. Next, invoke the pad function
secs = pad(secs);
mins = pad(mins);
hrs = pad(hrs);

 //update the display
 timeDisplay.textContent = `${hrs}:${mins}:${secs}`;


//add a zero as padding for any single digit number on the timer
    //create an inner function which will accept a unit
  //1.      //create a teneray operator 
//add a zero to the front of the unit, access the length property.
//if we add a zero to the unit, what's the length; isthat length greater than 2 - question mark - if it is simple return the unit, otherwise, prepend the zero + unit
function pad(unit) {
return (('0') + unit).length > 2 ? unit : '0' + unit
    }

}

