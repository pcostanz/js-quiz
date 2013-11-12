// Quiz JavaScript File

var quizContents = [
	{
		question: "Who invented jQuery?",
		answers: [
			"John Resig",
			"Jeremy Ashkenas",
			"Douglas Crockford",
			"Paul Irish",
			"Addy Osmani"
		],
		correctAnswer: 0,
	},

	{
		question: "Which of the following is NOT an example of a data structure?",
		answers: [
			"Binary Tree",
			"Bogo Consortium",
			"Doubly Linked List",
			"Hash Table",
			"Queue"
		],
		correctAnswer: 1,
	},

	{
		question: "The most forked bower (front end) component is:",
		answers: [
			"Node",
			"jQuery",
			"Twitter Bootstrap",
			"HTML5 Boilerplate",
			"Angular"
		],
		correctAnswer: 2,
	},

	{
		question: "JavaScript was first released in:",
		answers: [
			"1979",
			"2009",
			"1985",
			"1995",
			"2006"
		],
		correctAnswer: 3,
	},

	{
		question: "Which of the following is a JavaScript object:",
		answers: [
			"strings",
			"numbers",
			"null",
			"booleans",
			"functions"
		],
		correctAnswer: 4,
	},

];

$(document).ready(function(){

	var currentQuestion = 0;
	var currentScore = 0;
	var quizLength = quizContents.length;
	var question = $("#quiz-q");
	var answers = $(".quiz-a");
	var scoreboard = $("#quiz-score");
	var scoreboardTotal = $("#quiz-total");

	answers.on("click", function() {
		// cache some variables
		var clicked = $(this).index();
		var correctAnswer = quizContents[currentQuestion].correctAnswer;

		// if you've clicked the correct answer, add a point
		if (clicked === correctAnswer) {
			currentScore++;
		}

		// increment question number
		currentQuestion++;

		// update scoreboard
		scoreboard.text(currentScore);
		scoreboardTotal.text(currentQuestion);

		// load next question
		loadQuestion(quizContents, currentQuestion);
	});

	function loadQuestion(array, index) {
		// check if it's the last question

		if (currentQuestion === quizLength) {
			// remove answers click handler and return
			answers.off();
			return;
		}

		// set question text to the question value at the current question index in the answers array
		question.text(array[index].question);

		// iterate through each question and update the text from the answers array
		answers.each(function(){
			// cache the index (mostly make it easier to write the next part...)
			var index = $(this).index();
			// set the text equal to the answer at the corresponding index of the array of question elements (wut?)
			$(this).text(array[currentQuestion].answers[index]);
		});
	}

	// load the first question on page load
	loadQuestion(quizContents, currentQuestion);

});