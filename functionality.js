let currentTask = 0;
$("#enter-box").hide();
$("#wrong-message").hide();

function launchGame() {
    $("#enter-box").show();
    updateScreen();
}

function updateScreen() {
    if (currentTask < puzzleTasks.length) {
        $("#task-box").html(`
            <img src="${puzzleTasks[currentTask].taskImage}" />
			<div id="hint-box">
                <button onclick="toggleHint()">Hint</button>
                <span id="hint-text">${puzzleTasks[currentTask].taskHint}</span>
            </div>
        `);
        $("#wrong-message").hide();
        $("#hint-text").hide();
        $("#answer-input").val("");
    } else {
        winScreen();
    }
}

function toggleHint() {
    $("#hint-text").is(":visible") ? $("#hint-text").hide() : $("#hint-text").show();
}

function enterAnswer() {
    if ($("#answer-input").val().trim().toLowerCase() == puzzleTasks[currentTask].taskSolution) {
        currentTask++;
        updateScreen();
    } else {
        if ($("#answer-input").val().trim().toLowerCase() != "") {
            $("#wrong-message").text(`${$("#answer-input").val()} is incorrect.`);
            $("#wrong-message").show();
        }
    }
}

function winScreen() {
    $("main").html(`     
        <p>Congratulations! You completed Head Scratchers 1! Let me know what you liked and disliked so I can
        improve the experience for future games. Thanks for playing!</p>
    `);
}

let puzzleTasks = [
    {
        taskNumber: 1,
        taskSolution: 274,
        taskHint: "A calculator may help.",
        taskImage: "./images/puzzle1.png",
    },
    {
        taskNumber: 2,
        taskSolution: 151670,
        taskHint: "When you find the correct method, you should have exactly 3 numbers that you should put in order and enter as a 6-digit code.",
        taskImage: "./images/puzzle2.png",
    },
    {
        taskNumber: 3,
        taskSolution: "here",
        taskHint: "Unscramble the puzzle to get the answer.",
        taskImage: "./images/puzzle3.png",
    },
    {
        taskNumber: 4,
        taskSolution: "december",
        taskHint: "Treat this like a game of Mad Gab.",
        taskImage: "./images/puzzle4.png",
    },
    {
        taskNumber: 5,
        taskSolution: "cclxxx",
        taskHint: "This may be easier if you're from Ancient Rome.",
        taskImage: "./images/puzzle5.png",
    },
    {
        taskNumber: 6,
        taskSolution: "d5g2",
        taskHint: "Checkmate the black king in one move.",
        taskImage: "./images/puzzle6.png",
    },
    {
        taskNumber: 7,
        taskSolution: "eight",
        taskHint: "Translate the images and solve the problem.",
        taskImage: "./images/puzzle7.png",
    },
    {
        taskNumber: 8,
        taskSolution: 2079,
        taskHint: "One bird in a bush is 35, but how many words are in each Poloroid?",
        taskImage: "./images/puzzle8.png",
    },
    {
        taskNumber: 9,
        taskSolution: "glyphs",
        taskHint: "This is a Caesar Cipher. Shift the letters from their origin.",
        taskImage: "./images/puzzle9.png",
    },
    {
        taskNumber: 10,
        taskSolution: 215,
        taskHint: "Tic-Tac-Toe PigPen",
        taskImage: "./images/puzzle10.png",
    },
    {
        taskNumber: 11,
        taskSolution: "earthworms",
        taskHint: "Solve the crossword to uncover the hidden X",
        taskImage: "./images/puzzle11.png",
    },
];
