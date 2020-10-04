//update #currentDay
$("#currentDay").text(moment().format("dddd-MMMM-DD"));

//check time to change colors of corresponding time blocks-will also need
//setInterval to refresh and loop through time-blocks


//current time
var currentTime = moment().format("HH");
console.log(currentTime);

//setInterval to refresh check for changing time-block colors
var interval = setInterval(currentTime, 5000)
console.log(interval);

//translate id string to integer

//if .addClass/.removeClass

//else if

//else

//$(".saveBtn").on("click", function ()
//); setItem

//getItem