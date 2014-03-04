$(document).ready(function () {

 //wire up on click for chicago.  display it's image and title and hide the others
  $('#chicago').bind('click', function(event) {
     hideAllTitles();
     removeMarqueeNavLinkStyle();
     $("#mainPage").removeClass("hide");
     removeAllMarquees();
      $("#topMarquee").addClass("topMarqueeMainImg");
  });


 //wire up on click for business.  display it's image and title and hide the others
  $('#business').bind('click', function(event) {
     hideAllTitles();
     removeMarqueeNavLinkStyle();
     $("#business").addClass("currentLink");
     $("#businessPage").removeClass("hide");
     removeAllMarquees();
      $("#topMarquee").addClass("topMarqueeBusinessImg");
  });

 //wire up on click for culture.  display it's image and title and hide the others
  $('#culture').bind('click', function(event) {
     hideAllTitles();
     removeMarqueeNavLinkStyle();
     $("#culture").addClass("currentLink");
     $("#culturePage").removeClass("hide");
     removeAllMarquees();
      $("#topMarquee").addClass("topMarqueeCultureImg");
  });

 //wire up on click for environment.  display it's image and title and hide the others
  $('#environment').bind('click', function(event) {
     hideAllTitles();
     removeMarqueeNavLinkStyle();
     $("#environment").addClass("currentLink");
     $("#environmentPage").removeClass("hide");
     removeAllMarquees();
      $("#topMarquee").addClass("topMarqueeEnvironmentImg");
  });

  //wire up on click for housing.  display it's image and title and hide the others
    $('#housing').bind('click', function(event) {
       hideAllTitles();
       removeMarqueeNavLinkStyle();
       $("#housing").addClass("currentLink");
       $("#housingPage").removeClass("hide");
       removeAllMarquees();
        $("#topMarquee").addClass("topMarqueeHousingImg");
  });

  //wire up on click for social services.  display it's image and title and hide the others
    $('#social').bind('click', function(event) {
       hideAllTitles();
       removeMarqueeNavLinkStyle();
       $("#social").addClass("currentLink");
       $("#socialPage").removeClass("hide");
       removeAllMarquees();
        $("#topMarquee").addClass("topMarqueeSocialImg");
  });

  //wire up on click for civic services.  display it's image and title and hide the others
    $('#civic').bind('click', function(event) {
       hideAllTitles();
       removeMarqueeNavLinkStyle();
       $("#civic").addClass("currentLink");
       $("#civicPage").removeClass("hide");
       removeAllMarquees();
        $("#topMarquee").addClass("topMarqueeCivicImg");
  });

  //wire up on click for education services.  display it's image and title and hide the others
    $('#education').bind('click', function(event) {
       hideAllTitles();
       removeMarqueeNavLinkStyle();
       $("#education").addClass("currentLink");
       $("#educationPage").removeClass("hide");
       removeAllMarquees();
        $("#topMarquee").addClass("topMarqueeEducationImg");
  });

  //wire up on click for health services.  display it's image and title and hide the others
    $('#health').bind('click', function(event) {
       hideAllTitles();
       removeMarqueeNavLinkStyle();
       $("#health").addClass("currentLink");
       $("#healthPage").removeClass("hide");
       removeAllMarquees();
       $("#topMarquee").addClass("topMarqueeHealthImg");
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
    $("#topMarquee").removeClass("topMarqueeCivicImg");
    $("#topMarquee").removeClass("topMarqueeEducationImg");
    $("#topMarquee").removeClass("topMarqueeHealthImg");
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
    $("#civicPage").addClass("hide");
    $("#educationPage").addClass("hide");
    $("#healthPage").addClass("hide");
 }





function removeMarqueeNavLinkStyle() {
   $("#topMarqueeNav a.currentLink").removeClass("currentLink");
}






});  //end document onReady


//try deleting dom nodes
window.onresize = function(event) {
    var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
    if (width < 481) {
      removeAllMarquees();
       hideAllTitles();
      $("#topMarquee").removeClass("topMarquee");
      $("#topMarqueeNav").hide();
      $("#mainContent").hide();
    }
};