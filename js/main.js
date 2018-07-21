'use strict';
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
// count up on home page---------------------
$(document).ready(function(){
    $('.counter').each(function () {
        var $this = $(this),
            countTo = $this.attr('data-count');

        $({ countNum: $this.text() }).animate({
            countNum: countTo
        },

            {

                duration: 50000,
                easing: 'linear',
                step: function () {
                    $this.text(Math.floor(this.countNum) + "+");
                },
                complete: function () {
                    $this.text(this.countNum + "+");
                    //alert('finished');
                }

            });

    });
})
// ----------------------------------------------------------
// --------------------courses page--------------------------
//navbar
$(document).ready(function(){
  $('.menu-toggle').click(function(){
    $('nav').toggleClass('active')
  })
})


$(function(){

		$("#cart-items").slideUp();
		$(".cart").on("click", function () {
		$("#cart-items").slideToggle();
		});

		$("#items-basket").text("(" + ($("#list-item").children().length) + ")");


		$(".item").on("click", function () {
      $("#cart-items").slideDown();
     setTimeout(function(){
        $("#cart-items").slideUp();
     }, 150000)
			//add items to basket
			$(this).each(function () {
				var name = $(this).children(".item-detail").children("h4").text();
				var remove = "<button class='remove'> X </button>";
				var cena = "<span class='eachPrice'>" + (parseFloat($(this).children(".item-detail").children(".prices").children(".price").text())) + "</span>";
				$("#list-item").append("<li>" + name + "&#09; - &#09;" + cena + "R" + remove + "</li>");

				//number of items in basket
				$("#items-basket").text("(" + ($("#list-item").children().length) + ")");
				$("#items-basket").text();

	        //calculate total price
	        var totalPrice = 0;
		        $(".eachPrice").each(function (){
		          var cenaEach = parseFloat($(this).text());
		          totalPrice+=cenaEach;
		        });
		        $("#total-price").text(totalPrice + "R");
			});

			//remove items from basket
			$(".remove").on("click", function () {
				$(this).parent().remove();

		        var totalPrice = 0;
		        $(".eachPrice").each(function (){
		          var cenaEach = parseFloat($(this).text());
		          totalPrice+=cenaEach;
		        });
		        $("#total-price").text(totalPrice + "R");
				$("#items-basket").text("(" + ($("#list-item").children().length) + ")");
			});
		});
})

// portfolio page lightbox javascript
function openModal() {
  document.getElementById('myModal').style.display = "block";
}

function closeModal() {
  document.getElementById('myModal').style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}
// progress bar in about page
var canvas = document.getElementsByTagName('canvas');

    for (var i = 0; i < canvas.length; i++) {
    progressBar(canvas[i].id);
    }

    // load the canvas
    function progressBar(canvasId) {
    var canvas = document.getElementById(canvasId);
    var ctx = canvas.getContext('2d');

    // declare some variables
    var cWidth = canvas.width;
    var cHeight = canvas.height;
    var progressColor = '#ED524E';
    var circleColor = '#333';
    var rawPerc = canvas.getAttribute('data-perc');
    // var definition = canvas.getAttribute('data-text');
    var perc = parseInt(rawPerc);
    var degrees = 0;
    var endDegrees = (360*perc)/100;
    // The 'brush' size
    var lineWidth = 7;
    // console.log(canvasId+' '+perc);

    function getDegrees() {
      if(degrees < endDegrees) {
        degrees++;
      }
      else {
        clearInterval(degreesCall);
      }

      drawProgressBar();
    }

    function drawProgressBar() {
      //clear the canvas after every instance
      ctx.clearRect(0,0,cWidth,cHeight);

      // let's draw the background circle
      ctx.beginPath();
      ctx.strokeStyle = circleColor;
      ctx.lineWidth = lineWidth -1;
      ctx.arc(cHeight/2, cWidth/2, cWidth/3, 0, Math.PI*2, false);
      ctx.stroke();
      var radians = 0; // We need to convert the degrees to radians

      radians = degrees * Math.PI/180;
      // let's draw the actual progressBar
      ctx.beginPath();
      ctx.strokeStyle = progressColor;
      ctx.lineWidth = lineWidth;
      ctx.arc(cHeight/2, cWidth/2, cWidth/3, 0 - 90*Math.PI/180, radians - 90*Math.PI/180, false);
      ctx.stroke();

      // let's get the text
      ctx.fillStyle = progressColor;
      ctx.font = '20px Arial';
      var outputTextPerc = Math.floor(degrees/360*100)+'%';
      var outputTextPercWidth = ctx.measureText(outputTextPerc).width;
      // var outputTextDefinitionWidth = ctx.measureText(definition).width;
      ctx.fillText(outputTextPerc, cWidth/1.7 - outputTextPercWidth/1.5, cHeight/1.7 - 10);
      // ctx.fillText(definition, cWidth/2 - outputTextDefinitionWidth/2, cHeight/2 + 15);
    }

    degreesCall = setInterval(getDegrees, 10/(degrees - endDegrees));
    }
