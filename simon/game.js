


/***** Game Logic *****/
// Store Game and User Patterns
let gamePattern = [];
let userPattern = [];

function nextSequence() {
    // Reset user pattern
    userPattern = [];

    // Get next color
    let buttonColors = ["r", "b", "g", "y"];
    let randomChosenColor = buttonColors[Math.floor(Math.random() * 4)];
    gamePattern.push(randomChosenColor);

    // Update Level
    $("#level-title").text("Level " + gamePattern.length);

    // Display Game Pattern
        setTimeout(() => {
            selectButton(randomChosenColor);
        }, 1000);

    // Testing
    console.log("Game Pattern: " + gamePattern);
}

function checkAnswer (level) {
    if (gamePattern[level] === userPattern[level]) {
        if (userPattern.length === gamePattern.length) {
            nextSequence();
        }
    } else {
        $("body").addClass("game-over");
        $("#level-title").text("Game Over on Level " + gamePattern.length + "!");
        new Audio("sounds/wrong.mp3").play();
        setTimeout(() => {
            $("body").removeClass("game-over")
        }, 200);
    }
}

/***** Event Handlers *****/
// Click Handler
$("button").click(function () {
    selectButton(this.innerHTML);
    userPattern.push(this.innerHTML);
    checkAnswer(userPattern.length - 1);
})

// Keyboard Keypress Handler
$(document).keydown(function(event) {

    switch (event.key) {
        case "g":
            userPattern.push("g");
            selectButton("g");
            break;
        case "r":
            userPattern.push("r");
            selectButton("r");
            break;
        case "y":
            userPattern.push("y");
            selectButton("y");
            break;
        case "b":
            userPattern.push("b");
            selectButton("b");
            break;
        case " ":
            gamePattern = [];
            nextSequence();
            break;
    }
    checkAnswer(userPattern.length - 1);
});

/***** Play Sound and Animate Button *****/
function selectButton (key) {
    switch (key) {
        case "g": new Audio("sounds/green.mp3").play(); break;
        case "r": new Audio("sounds/red.mp3").play(); break;
        case "y": new Audio("sounds/yellow.mp3").play(); break;
        case "b": new Audio("sounds/blue.mp3").play(); break;
    }
    $("." + key).addClass("pressed");
    setTimeout(function() {
        $("." + key).removeClass("pressed");
    }, 100);
}

