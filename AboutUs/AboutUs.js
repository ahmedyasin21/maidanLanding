  // nav burger
  function onClickManu(){
    document.getElementById("navbarSupportedContent").classList.toggle("show");
 }

$(function clickMe() {
  $('tr').hover(function() {
      $(this).css('background-color', '#eee');
      $(this).contents('td').css({'border': '0px solid red', 'border-left': 'none', 'border-right': 'none',});
      $(this).contents('td:first').css('border-left', '0px solid red');
      $(this).contents('td:last').css('border-right', '0px solid red');
  },
  function() {
      $(this).css('background-color', '#FFFFFF');
      $(this).contents('td').css('border', 'none', );
      $('a#read_message.php').click(function(){ URL("www.gooogle.com"); });
  });
});

$('#ourservice').hover(
  function(){ $(this).addClass('hover') },
  function(){ $(this).removeClass('hover') }
   );
$('#ourcompany').hover(
function(){ $(this).addClass('hover') },
function(){ $(this).removeClass('hover') }
  );
$('#team').hover(
    function(){ $(this).addClass('hover') },
    function(){ $(this).removeClass('hover') }
      );