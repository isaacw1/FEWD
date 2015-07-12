$(document).ready(function(){

$("#test1").append("<div class='front'><'img src="img/bicycle-back.jpg"'/></div>");

});


(function() {
  var cardflip = document.querySelectorAll(".card.effect__click");
  for ( var i  = 0, len = cardflip.length; i < len; i++ ) {
    var card = cardflip[i];
    clickListener( card );
  }

  function clickListener(card) {
    card.addEventListener( "click", function() {
      var c = this.classList;
      c.contains("flipped") === true ? c.remove("flipped") : c.add("flipped");
    });
  }
})();
