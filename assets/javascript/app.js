var questions = {
    Q0: {
        question: "Which Hokage sealed the nine-tailed fox inside Naruto?",
        choices: ["First Hokage", "Second Hokage", "Thrid Hokage", "Forth Hokage"],
        correct: "Forth Hokage",
        image: "assets/images/forthHokage.gif"
    },
    Q1: {
        question: "Which character can only use taijutsu?",
        choices: ["Iruka", "Zabuza", "Sasuke", "Rock Lee"],
        correct: "Rock Lee",
        image: "assets/images/rockLee.gif"
    }
}

//Keys in questions
var Keys = Object.keys(questions);

//Counter
var counter = 0;

//For later comparison purposes
var radiovalue = "";
var correctchoice = "";

//Correct and incorrect counter
var correct = 0;
var incorrect = 0;

var displayQuestion = function() {

    //Empty the displayed info
    $("#game").empty();

    //Show the next question
    var newDiv = $("<div>");
    var question = $("<div>");
    question.text(questions['Q' + counter].question);
    newDiv.append(question);
    $("#game").append(newDiv);
    
    //Dynamically generate 4 input 
    for (let i = 0; i < questions['Q' + counter].choices.length; i++) {
        var choiceDiv = $("<div>");
        var choiceInput = $('<input>');
        var choiceInputLabel = $("<label>");

        choiceInputLabel.text(questions['Q' + counter].choices[i]);
        choiceInputLabel.attr("for", "choice" + i);

        choiceInput.attr("name", "same");
        choiceInput.attr("id", "choice" + i);
        choiceInput.attr("value", questions['Q' + counter].choices[i]);
        choiceInput.attr("index", i);
        choiceInput.attr("type", "radio");
        
        choiceDiv.append(choiceInput);
        choiceDiv.append(choiceInputLabel);
   
        newDiv.append(choiceDiv);
    }

    var checkButton = $("<button>");
    checkButton.text("Submit");
    checkButton.attr("class", "submit");
    $("#game").append(checkButton);

    radiovalue = $("input[name='same']:checked").val();
    correctchoice = questions['Q' + counter].correct;

    //Counter plus one
    counter++;
}

var displayAnswer = function() {

    // Empty the displayed info
    $("#game").empty();

    var newDiv = $("<div>");
    var result = $("<div>");
    var answer = $("<div>");
    var image = $("<img>");
    image.attr("src", questions['Q' + (counter -1)].image);
    var nextQuestion = $("<button>");
    
    if (counter == Keys.length) {
        nextQuestion.attr("class", "final");
    }
    else {
        nextQuestion.attr("class", "generic");            
    }

    nextQuestion.text("Next question");
    
    console.log(radiovalue);
    console.log(correctchoice);

    if (radiovalue == correctchoice) {
        result.text("That is correct!");
    }
    else {
        result.text("Unfortunately that is not true.");
    }

    newDiv.append(result);
    answer.text("The correct answer is " + questions['Q' + (counter - 1)].choices[questions['Q' + (counter - 1)].correct]);
    newDiv.append(answer);
    newDiv.append(image);
    newDiv.append(nextQuestion);
    $("#game").append(newDiv);

}

var displayFinal = function() {
    // Empty the displayed info
    $("#game").empty();

    var newDiv = $("<div>");
    var correctDiv = $("<div>");
    var incorrectDiv = $("<div>");
    var image = $("<img>");
    image.attr("src", "assets/images/finalImage.jpg")

    correctDiv.text("Correct: " + correct);
    incorrectDiv.text("Incorrect: " + incorrect);
    newDiv.append(correctDiv, incorrectDiv, image);
    $("#game").append(newDiv);
}


$(document).on("click", ".generic", displayQuestion);
$(document).on("click", ".submit", displayAnswer);
$(document).on('click', ".final", displayFinal);

