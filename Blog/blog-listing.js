// load more
$(document).ready (function () {
  $(".content").slice(0, 10).show();
  $("#loadMore").on("click", function(e){
    e.preventDefault();
    $(".content:hidden").slice(0, 4).slideDown();
    if ($(".content:hidden").length == 0) {
      $("#loadMore").text("No Content").addClass("noContent");
    }
  });
  })

  // nav burger
  function onClickManu(){
     document.getElementById("navbarSupportedContent").classList.toggle("show");
  }
