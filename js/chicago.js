$(document).ready(function () {

 //wire up on click for chicago.  display it's image and title and hide the others
  $('#chicago').bind('click', function(event) {
     hideAllTitles();
     $("#mainPage").removeClass("hide");
     removeAllMarquees();
      $("#topMarquee").addClass("topMarqueeMainImg");
  });


 //wire up on click for business.  display it's image and title and hide the others
  $('#business').bind('click', function(event) {
     hideAllTitles();
     $("#businessPage").removeClass("hide");
     removeAllMarquees();
      $("#topMarquee").addClass("topMarqueeBusinessImg");
  });

 //wire up on click for culture.  display it's image and title and hide the others
  $('#culture').bind('click', function(event) {
     hideAllTitles();
     $("#culturePage").removeClass("hide");
     removeAllMarquees();
      $("#topMarquee").addClass("topMarqueeCultureImg");
  });

 //wire up on click for environment.  display it's image and title and hide the others
  $('#environment').bind('click', function(event) {
     hideAllTitles();
     $("#environmentPage").removeClass("hide");
     removeAllMarquees();
      $("#topMarquee").addClass("topMarqueeEnvironmentImg");
  });

  //wire up on click for housing.  display it's image and title and hide the others
    $('#housing').bind('click', function(event) {
       hideAllTitles();
       $("#housingPage").removeClass("hide");
       removeAllMarquees();
        $("#topMarquee").addClass("topMarqueeHousingImg");
  });

  //wire up on click for social services.  display it's image and title and hide the others
    $('#social').bind('click', function(event) {
       hideAllTitles();
       $("#socialPage").removeClass("hide");
       removeAllMarquees();
        $("#topMarquee").addClass("topMarqueeSocialImg");
  });



 //Remove all the Marquee images.  The clicked event for the specific link will determine which one
 //to add back in.  They are all being removed because the current Marquee assigned to the id is unknown.
 //Account for case where user clicks the same link twice.
 function removeAllMarquees() {
    $("#topMarquee").removeClass("topMarqueeMainImg");
    $("#topMarquee").removeClass("topMarqueeBusinessImg");
    $("#topMarquee").removeClass("topMarqueeCultureImg");
    $("#topMarquee").removeClass("topMarqueeEnvironmentImg");
    $("#topMarquee").removeClass("topMarqueeHousingImg");
    $("#topMarquee").removeClass("topMarqueeSocialImg");
 }



 //Hide all the titles which go with the Marquee because the previous Marquee is unknown.
 //the clicked event for the specific link will determine which title to show.
 function hideAllTitles() {
    $("#mainPage").addClass("hide");
    $("#businessPage").addClass("hide");
    $("#culturePage").addClass("hide");
    $("#environmentPage").addClass("hide");
    $("#housingPage").addClass("hide");
    $("#socialPage").addClass("hide");
 }













});  //end document onReady