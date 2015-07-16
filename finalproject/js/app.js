var x = document.getElementById("myDialog");

function showDialog() {
    x.showModal();
}

var App = function(){


  this.init = function(){

    console.log('App online.');

  };

};

App.init();
