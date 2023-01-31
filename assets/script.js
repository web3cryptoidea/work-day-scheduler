var currentHour = new Date().getHours();
var timeDisplay = $('#currentDay');


  //Display current day
  function displayDay() {
    var rightNow = moment().format('ddd, MMM Do YYYY');
    timeDisplay.text(rightNow);
  }

  displayDay();

$(document).ready(function() {
 
  //Store the entry data in the local storage
  $(".saveBtn").on("click", function(){
    var inputArea = $(this).siblings(".errand-name").val();
    console.log(inputArea);
    var rowHour = $(this).parent().attr("id");
    localStorage.setItem(rowHour, inputArea);
})
 //Retrieve the entry data from local storage    
  $("#8 .errand-name").val(localStorage.getItem("8"));
  for (var i=8; i < 18; i++) {
  $("#" + i + " .errand-name").val(localStorage.getItem("" + i));
  }

// Loop through the time blocks and set a different color
// depending on whether its past, future or present hour
  $('.row').each(function() {
    var entry = $(this).find('.time').text();
    var entryHour = parseInt(entry.split(' ')[0]);
    var entryPeriod = entry.split(' ')[1];

    if (entryPeriod == "pm") {
      if (entryHour == 12) {
        entryHour == 12
       } else {
      entryHour += 12;
      }
    }
    if (currentHour < entryHour) {
      $(this).find('.errand-name').addClass("future");
    } else if (currentHour == entryHour) {
      $(this).find('.errand-name').addClass("present");
    } else {
      $(this).find('.errand-name').addClass("past");
    }
    $(this).find('.saveBtn').addClass("saveBtn");
  });
});
 

