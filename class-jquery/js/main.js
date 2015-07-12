//this could be helpful for card match

$(document).ready(function(){

  // selecting and manipulating existing DOM nodes
  $("h1").text("We're replacing this <h1> with new text!");

  // Add another HTML element to the page with .append()
  $("#container").append("<div id='iw'>I'am adding another element to the dom</div>");

  $("form").submit(function(){
    var value = $('input[type=text]').val();
    $("ul").append("<li>"+value+"</li>");
    x.preventDefault();
  });

  $("p").click(function(){
    $(this).hide();
  });

//  $("h2").hover(function(){
//alert('you are funny');
//  });

$("#btn-slide").click(function(){
  $("#panel").slideToggle("slow");
});

$.getJSON("http://www.omdbapi.com/?t=Shrek", function(response, status, jqXHR){

  //console.log(response);
  //console.log(status);
  //console.log(jqXHR);

  $('.pane').find('h3').eq(0).html(response['Title']);
  $('.pane').find('p').eq(0).html(response['Plot']);
  $('<img>', {src: response['Poster'], class: 'poster'}).appendTo('.pane');


});




});



;
