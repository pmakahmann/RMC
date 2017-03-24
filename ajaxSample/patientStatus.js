$(document).ready(function () {
  $.getJSON('https://api.myjson.com/bins/17o78t', function (data) {
    var statusHTML = '<ul class="bulleted">';
    $.each(data,function (index, patient) {
      if (patient.inoffice === true) {
        statusHTML +='<li class="in">';
      } else {
        statusHTML +='<li class="out">';
      }
      statusHTML += patient.name + '</li>';
    });
    statusHTML += '</ul>';
    $('#patientList').html(statusHTML)
  }); // end getJSON
}); // end ready

//.getJson link is currently to temporary myJson.com file.  Redo this when hosted.
