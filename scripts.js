console.log('...sup!');

function addValue(){
var prizeArray = ['$0', '$1', '$10', '$0', '$25', '$50', '$0', '$100', '$150', '$0', '$250', '$300', '$0', '$400', '$500', '$0'];

$('.prize').each(function(){
	var prizeText = prizeArray[Math.floor(Math.random()*prizeArray.length)];
	$(this).text(prizeText);
});
};

function scratch(){
$('.square').mouseover(function(addValue){
console.log( $('.prize').length );
$('.square').css('opacity', '-=0');
$(this).css('opacity', '-=0.1');
var oP = $(this).css('opacity');
if(oP == '0.2'){
	$(this).css('display', 'none');
  $(this).next().css('display', 'inline-block');
}
});
};

function playAgain(){
  $('#playAgain').on('click', function(){
  location.reload();
});
};

$(function(){
addValue();
scratch();
playAgain();
});
