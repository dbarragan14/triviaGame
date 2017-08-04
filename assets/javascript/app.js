$(document).ready(function() {
    
    var questionCounter = 0;

    var correctTally = 0;

    var unansweredTally = 0;

    var incorrectTally = 0;

    var startScreen;

    var gameHTML;
    var questions = ["What is generally considered to be the first pony car?", "What was the first japanese car to be produced in the United States?", "What year was the Corvette first introduced?", "How much horse power did the first porche 911 have?"];
    var answers = [
        ["Ford Mustang", "Pontiac Firebird", "Mercury Cougar", "Chevorlet Camero"],
        ["Honda Accord", "Toyota Camry", "Nissan Maxima", "Mazda Miata"],
        ["Chevorlet Impala", "Buick Wildcat", "Pontiac GTO", "Ford Thunderbird"],
        ["130 HP", "35 HP", "90 HP", "180 HP"]
    ];
    var correctAnswers = ["A. Ford Mustang", "B. Honda Accord", "C. Chevrolet Impala", "C. 130 HP"];



    function initialScreen() {
        startScreen = "<div class='text-center main-button-container'><a class='btn btn-primary btn-lg btn-block start-button' href='#' role='button'>Start Quiz</a></div>";
        $('.MainArea').html(startScreen);
    }

    initialScreen();


    	function timer() {
        theClock = setTimeout(twentySeconds, 20000);
        function twentySeconds() {
            if (counter === 0) {
                gameLossDueToTimeOut();
            }

            if (counter > 0) {
                counter--;
            }
            $(".timer").html(counter);
        }
    };

    function gameLossDueToTimeOut() {
        unansweredTally++;
        gameHTML = "<div class='text-center timer-div'>Time Remaining: <div class='timer'>" + counter + "</div></div>" + "<div class='text-center'>You ran out of time!  The correct answer was: " + correctAnswers[questionCounter] + "</div>";
        $(".MainArea").html(gameHTML);
        setTimeout(wait, );
    }

    function gameWin() {
        correctTally++;
        gameHTML = "<div class='text-center timer-div'>Time Remaining: <div class='timer'>" + counter + "</div></div>" + "<div class='text-center'>Correct! The answer is: " + correctAnswers[questionCounter] + "</div>";
        $(".MainArea").html(gameHTML);
        setTimeout(wait, );
    }

    function gameLoss() {
        incorrectTally++;
        gameHTML = "<div class='text-center timer-div'>Time Remaining: <div class='timer'>" + counter + "</div></div>" + "<div class='text-center'>Wrong! The correct answer is: " + correctAnswers[questionCounter] + "</div>";
        $(".MainArea").html(gameHTML);
        setTimeout(wait, );
	
	function rungame() {
        gameHTML = "<div class='text-center timer-div'>Time Remaining: <div class='timer'>30</div></div><div class='text-center'>" + questionArray[questionCounter] + "</div><div class='first-answer answer'>A. " + answerArray[questionCounter][0] + "</div><div class='answer'>B. " + answerArray[questionCounter][1] + "</div><div class='answer'>C. " + answerArray[questionCounter][2] + "</div><div class='answer'>D. " + answerArray[questionCounter][3] + "</div>";
        $(".MainArea").html(gameHTML);
        console.log("rungame() running");
    }


    function finalScreen() {
        gameHTML = "<div class='text-center timer-div'>Time Remaining: <div class='timer'>" + counter + "</div></div>" + "<div class='text-center'>All done, here's how you did!" + "</div>" + "<div class='summary-correct'>Correct Answers: " + correctTally + "</div>" + "<div class='Wrong-Answers'>Wrong Answers: " + incorrectTally + "</div>" + "<div class='Unanswered'>Unanswered: " + unansweredTally + "</div>" + "<div class='text-center reset-button-container'><a class='btn btn-primary btn-lg btn-block reset-button' href='#' role='button'>startover</a></div>";
        $(".MainArea").html(gameHTML);
    }

    function resetGame() {
        counter = 20;
        unansweredTally = 0;
        questionCounter = 0;
        correctTally = 0;
        incorrectTally = 0;
        
        
        rungame();
        timerWrapper();
        resetGame();
    }


    console.log("hello");
});