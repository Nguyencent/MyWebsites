$(document).ready(function(){
    console.log("page is loaded");
    $(".container h1").click(function(){
      $(".container h1").toggleClass("animated rotateIn");
    });
});
