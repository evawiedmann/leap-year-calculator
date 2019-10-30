function LeapYear(year) {
  if(year%400===0 || year%4===0 && year%100!==0){
    return true
  } else {
    return false
  }
}

$(document).ready(function() {
  $("form#leapYear").submit(function(event) {
    event.preventDefault();
    var yearInput = $("input#year").val();
    LeapYear(yearInput);
    if(LeapYear(yearInput)===true){
      $("#answer").show();
    } else {
      $("#isNot").text("not");
    }

    $('#yearInput').text(yearInput);
    $("#answer").show();

  })


});
