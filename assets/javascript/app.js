$(document).ready(function() { 

    // Global Variables
    var totalQuiz = 10;
    var correctAnswer = 0;
    var incorrectAnswer = 0;
    var noAnswer = 0;
    var questionIndex = 0;
    var count = 60;

    // Questions and Answers 
    var questions = [{
        question: "Who is the Greatest Of All Time?",
        choices: ["MJ", "Kobe", "Wilt", "Russell"],
        answer: 0
    }, {
        question: "Who is the Greatest Of All Time?",
        choices: ["MJ", "Kobe", "Wilt", "Russell"],
        answer: 0
    }, {
        question: "Who is the Greatest Of All Time?",
        choices: ["MJ", "Kobe", "Wilt", "Russell"],
        answer: 0
    }, {
        question: "Who is the Greatest Of All Time?",
        choices: ["MJ", "Kobe", "Wilt", "Russell"],
        answer: 0
    }, {
        question: "Who is the Greatest Of All Time?",
        choices: ["MJ", "Kobe", "Wilt", "Russell"],
        answer: 0
    }, {
        question: "Who is the Greatest Of All Time?",
        choices: ["MJ", "Kobe", "Wilt", "Russell"],
        answer: 0
    }, {
        question: "Who is the Greatest Of All Time?",
        choices: ["MJ", "Kobe", "Wilt", "Russell"],
        answer: 0
    }, {
        question: "Who is the Greatest Of All Time?",
        choices: ["MJ", "Kobe", "Wilt", "Russell"],
        answer: 0
    }, {
        question: "Who is the Greatest Of All Time?",
        choices: ["MJ", "Kobe", "Wilt", "Russell"],
        answer: 0
    }, {
        question: "Who is the Greatest Of All Time?",
        choices: ["MJ", "Kobe", "Wilt", "Russell"],
        answer: 0
    }];

    // Load New Question to DOM
    function loadQuestion() {
        // Check If All Questions are Answered
        if (questionIndex < questions.length) {

            // Display Question
            $("#questions").html(questions[questionIndex].question);

            // Display Possible Answers
            $("#0").text(questions[questionIndex].choices[0]);
            $("#1").text(questions[questionIndex].choices[1]);
            $("#2").text(questions[questionIndex].choices[2]);
            $("#3").text(questions[questionIndex].choices[3]);

        } else {

            clearInterval(timer);
            $("#quiz, #timer").hide("slow");
            $("#results").show("slow");
            scoreCounter();
        }
    };

    // User Selection, Check If Answer is Correct or Incorrect

    $(".mc").click(function() {
        userGuess = $(this).attr("id");

        // Check for Correct Answer
        if (userGuess == questions[questionIndex].answer) {
            correct = correctAnswer++;
            alert("Correct!");
            console.log(correct + " correct");
        } else {
            incorrect = incorrectAnswer++;
            alert("Incorrect!");
            console.log(incorrect + " incorrect");
        }
        questionIndex++;
        loadQuestion();
    });

    // Score Count for Result Page

    // Check How Many Questions were Blank by Subtracting the If/Else Values from Above from the Total Number of Questions
    function scoreCount() {
        var totalAnswered = correctAnswer + incorrectAnswer;
        console.log(totalAnswered);
        if (totalAnswered !== totalQuiz) {
            blank = totalQuiz - totalAnswered;
        } else {
            blank = 0;
        }

        $("#correct").html(" " + correctAnswer);
        $("#incorrect").html(" " + incorrectAnswer);
        $("#blank").html(" " + blank);
    } 
        // Hide Quiz Until Play is Clicked
        $("#quiz, #results").hide();

        // Questions Show and Timer Begins
        $("#play").click(function() { 
            $("#start").hide("slow");
            $("#quiz").show("slow");
            loadQuestion();

            // Setup Timer to Countdown from 60 Seconds Total to Answer All Questions
            var startTimer = setInterval(function() {
                count--;
                $("countdown").html(count);

            // If User Runs Out of Time Before Completing Questions, Go to Results Page
            if (count === 0) {
                clearInterval(timer);
                $("quiz, #timer").hide("slow");
                $("#results").show("slow");
                scoreCount();
                }
            }, 1000);
        });

        // Restart Button Refresh page Back to Start Screen 
        $("#restart").click(function() {
            location.reload();
        });

});


