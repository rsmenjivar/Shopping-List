$(document).ready(function() {
  $('#add').click(function(){
    $('ul').append('<li><span class="item">' + $('input#add-text').val() + '</span> <button>Done</button> <button>Remove</button></li>');
    $('input#add-text').val("");
  });
  $('ul').on('click', '.done', function() {
	$(this).closest('li').toggleClass('new done');
  });
});