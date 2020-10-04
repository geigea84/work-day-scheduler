//update #currentDay
$("#currentDay").text(moment().format("dddd-MMMM-DD"));

//function to compare current time and time-blocks for changing time-block colors
var updateTime = function() {
    //current time
    var currentTime = moment().format("HH");
    //console.log(currentTime);

    //get time value of each time block "The $.each() function is not 
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
        var timeBlock = parseInt($(this).attr("id"));

        //if else to evaluate timeBlock value against currentTime
        //== vs === :
        if (timeBlock == currentTime) {
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

//$(".saveBtn").on("click", function ()
//); setItem

//getItem