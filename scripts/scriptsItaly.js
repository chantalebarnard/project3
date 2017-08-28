// document ready

$(function() {

// listen for the submit button being clicked

	$('form').on('submit', function(event) {
		event.preventDefault();

// on click pull data values from corresponding radio buttons 1 or 0

		var questionOne = $('input[name=q1]:checked').attr('data-score');
		var questionOneInt = parseInt(questionOne);

// for question two create integer value of either 1 or 0 depending on contents of input field

		var questionTwo;
		var questionTwoAnswer = $('input[name=q2]').val().toLowerCase();
		if (questionTwoAnswer === "parlo") {
			questionTwo = 1;
		} else {
			questionTwo = 0;
		}
		
// continue pulling data values from remaining radio inputs

		var questionThree = $('input[name=q3]:checked').attr('data-score');
		console.log(questionThree);
		var questionThreeInt = parseInt(questionThree);

// for question four create integer value of either 1 or 0 depending on contents of input field

		var questionFour;
		var questionFourAnswer = $('input[name=q4]').val().toLowerCase();
		if (questionFourAnswer === "ciao") {
			questionFour = 1;
		} else {
			questionFour = 0;
		}

// continue pulling data values from remaining radio inputs		

		var questionFive = $('input[name=q5]:checked').attr('data-score');
		var questionFiveInt = parseInt(questionFive);

// add totals of all 5 questions to return a value between 0 or 5 in var sum

		function add(q1,q2,q3,q4,q5) {
			return q1 + q2 + q3 + q4 + q5;
		}
		var sum = add(questionOneInt,questionTwo,questionThreeInt,questionFour,questionFiveInt);

// append specific string to h2 with class of results at the bottom of the page depending on the value of var sum

		if (sum === 5) {
			$('.results').html('5/5 Great Job!');
		} else if (sum === 4) {
			$('.results').html('4/5 Good Job');
		} else if (sum === 3) {
			$('.results').html('3/5...Needs Some Work');
		} else if (sum === 2) {
			$('.results').html('2/5 Failing Grade');
		} else if (sum === 1) {
			$('.results').html('1/5 See Me After Class');
		} else if (sum === 0) {
			$('.results').html('0/5 Maybe You Should Stay Home');
		} else {
			alert("Missing one or more answers!")
		}

// prevents button from staying on page after succesful submission

		if (sum >=0) {
			// $(".submit-container").removeClass("buttonOn");
			$('.restart').html('<input type="button" value="Try Again" onClick="window.location.reload()"></input>');
			$('.backToHome').html('<a href="index.html">Back To Language Select</a>');
		}

// Append specific string with relevant class to divs at bottom of the page if the asnwer is wrong		

		if (questionOneInt === 0 && sum >= 0) {
			$('.answerOne').html('<p>The correct answer for question #1 is <strong> ' + (document.getElementById('correct1').innerHTML) + '</strong></p>');
		}
        if (questionTwo === 0 && sum >= 0) {
			$('.answerTwo').html('<p>The correct answer for question #2 is <strong> ' + (document.getElementById('sentence').innerHTML) + '</strong></p>');
        }
        if (questionThreeInt === 0 && sum >= 0) {
            $('.answerThree').html('<p>The correct answer for question #3 is: <strong> ' + (document.getElementById('correct3').innerHTML) + '</strong></p>');
        }
        if (questionFour === 0 && sum >= 0) {
            $('.answerFour').html('<p>The correct answer for question #4 is <strong> ' + (document.getElementById('inputWord').innerHTML) + '</strong></p>');
        }
        if (questionFiveInt === 0 && sum >= 0) {
            $('.answerFive').html('<p>The correct answer for question #5 is <strong> ' + (document.getElementById('correct5').innerHTML) + '</strong></p>');
        }
	});

// seperate functions for highlighting the clicked answer/ image for the multiple choice questions. add/remove relevant classes on image to toggle box shadow (note, images also act as labels for radio button though radio buttons themselves are visability:hidden in this question)

//scroll down to next answer on submission of previous answer	

	$(".image").on("click",function(){
	  $(".image").addClass("not");
	  $(this).removeClass("not");
	  $(".inputWord").removeClass("hide");
	  $('html, body').animate({
	      scrollTop: $(".inputWord").offset().top
	  }, 750);
	});

	$(".label1").on("click", function(){
	  $(".label1").addClass("not");
	  $(this).removeClass("not");
	});

	$(".label2").on("click", function(){
	  $(".label2").addClass("not");
	  $(this).removeClass("not");
	});


//creat a cascade effect for the questions after an answer has been selected for the previous answer

	$(".answer1").on("click",function(){
		$(".sentence").fadeIn("slow");
		$('html, body').animate({
		    scrollTop: $(".sentence").offset().top
		}, 750);
	});

	$(".answer2").on("keydown",function(){
		$(".nextOne").fadeIn("slow");
	})

	$(".nextOne").on("click",function(){
		$(".imageChoice").fadeIn("slow");
		$('html, body').animate({
		    scrollTop: $(".imageChoice").offset().top
		}, 750);
	});

//prevents input from being submitted on press of enter key
	$(document).on("keypress", "input", function(event) { 
		    return event.keyCode != 13;
	});

	$(".answer4").on("keydown",function(){
		$(".nextTwo").fadeIn("slow");
	})


	$(".nextTwo").on("click", function(){
		$(".multipleChoice2").fadeIn("slow");
		$('html, body').animate({
		    scrollTop: $(".multipleChoice2").offset().top
		}, 750);
	});

	$(".answer5").on("click",function(){
		$(".submit-container").fadeIn("slow");
		$('html, body').animate({
		    scrollTop: $(".submit-container").offset().top
		}, 750);
		console.log("working");
	});

// Hide's quiz on submit and displays results in it's place
	$(".submitScore").on("click", function(){
		$("main").removeClass("displayAll");
		$("footer").removeClass("footer-height");
		$(".BGNone").removeClass("BGNone");
	});
// end document ready

});
