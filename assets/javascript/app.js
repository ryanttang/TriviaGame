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
        question: "Did we play last night? Then I don't watch other teams play. I've got other things to do in my life. I've got a wife. I like to shop. I got fashion. I got other things to do other than watch other teams play.",
        choices: ["Kevin Durant", "Russell Westbrook", "Allen Iverson", "Larry Bird"],
        answer: 1
    }, {
        question: "We're going to start asking people to go to bars and do some stuff. A little street cred would help us.",
        choices: ["Jeff Van Gundy", "Rick Carlise", "Nate McMillan", "Gregg Popovich"],
        answer: 3
    }, {
        question: "We're going to turn this team around 360 degrees",
        choices: ["Steve Nash", "Jason Kidd", "Rajon Rondo", "DeAngelo Russell"],
        answer: 1
    }, {
        question: 'Just remember Michael, when you played, they changed the rules to make it easier for you to dominate. When I played, they changed the rules to make it harder for me',
        choices: ["Magic Johnson", "Mugsy Bogues", "Wilt Chamberlain", "Moses Malone"],
        answer: 2
    }, {
        question: 'When you are not practicing, someone else is getting better',
        choices: ["Mike Bibby", "Ben Wallace", "Alonzo Mourning", "Allen Iverson"],
        answer: 3
    }, {
        question: 'Our offense is like the Pythagorean Theorem. There is no answer.',
        choices: ["Shaquille O'Neal", "Kobe Bryant", "Phil Jackson", "Derek Fisher"],
        answer: 0
    }, {
        question: "I never met a shot I didn't like",
        choices: ["Ray Allen", "Stephen Curry", "World B. Free", "JR Smith"],
        answer: 2
    }, {
        question: "The idea is not to block every shot. The idea is to make your opponent believe that you might block every shot.",
        choices: ["Hakeem Olajuwon", "Bill Russell", "Bill Walton", "Dwight Howard"],
        answer: 1
    }, {
        question: "I thought Lebron James was just another guy brought in to help me score",
        choices: ["Dwayne Wade", "Ricky Davis", "Larry Hughes", "Kyrie Irving"],
        answer: 1
    }, {
        question: "You can train a cat to bark, but that cat isn't going to bark.",
        choices: ["Tim Duncan", "Tracy McGrady", "Kobe Bryant", "Gilbert Arenas"],
        answer: 2
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
            scoreCount();
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
                $("#countdown").html(count);

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


