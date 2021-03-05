$(document).ready(function() {
    initializePage();
});

function initializePage(){}

// Get the modal
var modal = document.getElementById("myModal");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

//The 2 buttons
var btnDone = document.getElementById("complete");
var btnDel = document.getElementById("delete");

// When the user clicks on a list item, open the modal and marks the item as "clicked"
var list = document.querySelector('ul');

list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.add('clicked');
  }
  
  var header = $(".clicked").text();
  $.get("/get", {name: header}, appendVal);

  $(".modal-header h2").text(header)
  modal.style.display = "block";

}, false);

//Marks the last clicked item as "completed"
btnDone.onclick = function(){
	$(".clicked").addClass("checked");
	$(".checked").removeClass("clicked");
	modal.style.display = "none";
}

//Deletes the item from view
btnDel.onclick = function(){
  var title = $(".clicked").text();
  $.get("/deleted", {name: title});
	$(".clicked").addClass("deleted");
	$(".deleted").removeClass("clicked");
	$(".deleted").fadeOut();
	modal.style.display = "none";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
  $(".clicked").removeClass("clicked");
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
  	$(".clicked").removeClass("clicked");
    modal.style.display = "none";
  }
}

function appendVal(data) {
    console.log(data);
    $(".importance").append('<p style="text-align:left;">' + 
    data['importance'] + '%</p>'+ '<hr>')
    $(".urgency").append('<p style="text-align:left;">' + 
    data['urgency'] + '%</p>' + '<hr>')
  };