//update #currentDay
$("#currentDay").text(moment().format("dddd-MMMM-DD"));

//function to compare current time and time-blocks for changing time-block colors
var updateTime = function() {
    //current time (evaluates as a string)
    var currentTime = moment().format("HH");

    //get time value of each time-block "The $.each() function is not 
    //the same as $(selector).each(), which is used to iterate, exclusively, 
    //over a jQuery object. The $.each() function can be used to iterate 
    //over any collection, whether it is an object or an array."
    //function to iterate over each id associated with the time-block class
    $(".time-block").each(function() {
        
        //get "id" from ".time-block" and translate id string to integer
        //"The .attr() method gets the attribute value for only the first 
        //element in the matched set. To get the value for each element 
        //individually, use a looping construct such as jQuery's .each() 
        //or .map() method."
        var timeBlock = $(this).attr("id");
        //console.log(timeBlock);
        //console.log(currentTime);

        //if else to evaluate timeBlock value against currentTime
        //== vs === :using == for loose equality/type coercion
        if (timeBlock === currentTime) {
            $(this).addClass("present");
            $(this).removeClass("past");
            $(this).removeClass("future");
        }
        else if (timeBlock < currentTime) {
            $(this).addClass("past");
            $(this).removeClass("present");
            $(this).removeClass("future");
        }
        else if (timeBlock > currentTime) {
            $(this).addClass("future");
            $(this).removeClass("present");
            $(this).removeClass("past");
        }
        //console.log(timeBlock);
    });
};

//use setInterval to refresh updateTime function
var interval = setInterval(updateTime, 5000)

//setItem to local storage
//item being interacted with, what the interaction is, what that should trigger
//setting jquery val always empty, getting jquery val will have location
//https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage
//https://www.w3schools.com/jsref/prop_win_localstorage.asp
$(".saveBtn").on("click", function() {
    localStorage.setItem("#09", $("#09 .description").val());
    localStorage.setItem("#10", $("#10 .description").val());
    localStorage.setItem("#11", $("#11 .description").val());
    localStorage.setItem("#12", $("#12 .description").val());
    localStorage.setItem("#13", $("#13 .description").val());
    localStorage.setItem("#14", $("#14 .description").val());
    localStorage.setItem("#15", $("#15 .description").val());
    localStorage.setItem("#16", $("#16 .description").val());
    localStorage.setItem("#17", $("#17 .description").val());
});

//"A page can't be manipulated safely until the document is "ready." 
//jQuery detects this state of readiness for you. Code included 
//inside $( document ).ready() will only run once the page Document 
//Object Model (DOM) is ready for JavaScript code to execute. Code 
//included inside $( window ).on( "load", function() { ... }) will run 
//once the entire page (images or iframes), not just the DOM, is ready."
$(document).ready(function() {
    //getItem from local storage
    $("#09 .description").val(localStorage.getItem("#09"));
    $("#10 .description").val(localStorage.getItem("#10"));
    $("#11 .description").val(localStorage.getItem("#11"));
    $("#12 .description").val(localStorage.getItem("#12"));
    $("#13 .description").val(localStorage.getItem("#13"));
    $("#14 .description").val(localStorage.getItem("#14"));
    $("#15 .description").val(localStorage.getItem("#15"));
    $("#16 .description").val(localStorage.getItem("#16"));
    $("#17 .description").val(localStorage.getItem("#17"));
});