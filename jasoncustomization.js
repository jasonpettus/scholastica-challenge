$(document).ready(function() {

  $( "#badge" ).hide();

  $( "#add_camper" ).submit(function( event ) {
    event.preventDefault();
    var fName = $( "input[id=fName]" ).val();
    var lName = $( "input[id=lName]" ).val();
    var occupation = $( "input[id=occupation]" ).val();
    var email = $( "input[id=email" ).val();
    var imageUrl = $( "input[id=imageUrl]" ).val();
    var imageTag = "<div class=\"avatarimage\" style=\"background-image: url('" + imageUrl + "')\"></div>"

    $( "#badgeinfo" ).append(imageTag + "<br>" + fName + " " + lName + "<br>" + occupation + "<br>" + email);
    $( "#badge" ).show();
  });

});