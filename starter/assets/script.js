 

var currentHour = new Date().getHours();

// Get all time entries
var entries = document.querySelectorAll(".time");

$(".saveBtn").on("click", function(){
    var inputArea = $(this).siblings(".errand-name").val();
    console.log(inputArea);
    var rowHour = $(this).parent().attr("id");
    localStorage.setItem(rowHour, inputArea);
})

$("#8 .errand-name").val(localStorage.getItem("8"));
for (var i=8;  i < 18; i++)  {
$(`#${i} .errand-name`).val(localStorage.getItem(`${i}`));
}


// Loop through each entry
function entryLoop() {
for (var i = 0; i < entries.length; i++) {
    var entry = entries[i];
    var entryText = entry.innerText;
    var entryHour = parseInt(entryText.split(" ")[0]);
    var entryPeriod = entryText.split(" ")[1];

    // Compare current hour and entry hour
    if (entryPeriod == "pm") {
        entryHour += 12;
    }
    if (currentHour < entryHour) {
        entry.parentNode.style.backgroundColor = "red";
    } else {
        entry.parentNode.style.backgroundColor = "gray";
    }
}
}
entryLoop();

// Get all diary arrends entries
var diaryEntry = document.querySelectorAll(".errand-name");
function saveEntry() {
    // Get the value of the diary entry text 
    for (var i = 0; i < diaryEntry.length; i++) {
        var dentry = diaryEntry[i].value;
          // Save the entry to local storage
    localStorage.setItem("diaryEntry", dentry);
     // On page load, check if there is a saved diary entry in local storage
  // If so, populate the diary entry textarea with the saved entry
    }  
  }

  window.onload = function() {
    var savedEntry = localStorage.getItem("diaryEntry");
    if (savedEntry) {
      document.querySelectorAll(".errand-name").value = savedEntry;
    }    
  }
