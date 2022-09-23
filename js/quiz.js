// Quiz page 

var myQuestions = [{
    question: "Mardi Gras 2023 Falls On:",
    answers: {
        a: 'Monday, January 28, 2023',
        b: 'Tuesday, February 21, 2023',
        c: 'Wednesday, February 11, 2023'
    },
    correctAnswer: 'b'
},
{
    question: "Who celebrated America's first Mardi Gras in 1703?",
    answers: {
        a: 'France',
        b: 'Italy',
        c: 'Fort Louis de la Mobile'
    },
    correctAnswer: 'c'
},
{
    question: "What are the colors traditionally associated with Mardi Gras in New Orleans?",
    answers: {
        a: 'purple, blue, and gold',
        b: 'black, green, and gold',
        c: 'purple, green, and gold'
    },
    correctAnswer: 'c'
},
{
    question: "In what year a group of businessmen invented the carnival king?",
    answers: {
        a: '1972',
        b: '1872',
        c: '1852'
    },
    correctAnswer: 'b'
},
{
    question: "What does the color purple represent?",
    answers: {
        a: 'justice',
        b: 'power',
        c: 'faith'
    },
    correctAnswer: 'a'
},
{
    question: "What does the color gold represent?",
    answers: {
        a: 'justice',
        b: 'faith',
        c: 'power'
    },
    correctAnswer: 'c'
},
{
    question: "What does the color green represent?",
    answers: {
        a: 'justice',
        b: 'faith',
        c: 'power'
    },
    correctAnswer: 'b'
},
{
    question: "In what year did Governor Wormoth sign the Mardi Gras Law, making Tuesday a legal holiday in Louisiana?",
    answers: {
        a: '1875',
        b: '1785',
        c: '1870'
    },
    correctAnswer: 'a'
},
{
    question: "What is Mardi Gras?",
    answers: {
        a: 'Mardi Gras is Sports competition.',
        b: 'Mardi Gras is about music, parades, picnics, floats and excitement.',
        c: 'Mardi Gras is Independence Day.'
    },
    correctAnswer: 'b'
},
{
    question: "How much does it cost to participate in this celebration?",
    answers: {
        a: '$50',
        b: '$100',
        c: 'free'
    },
    correctAnswer: 'c'
},
];

var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');

generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton);

function generateQuiz(questions, quizContainer, resultsContainer, submitButton) {

function showQuestions(questions, quizContainer) {
    // we'll need a place to store the output and the answer choices
    var output = [];
    var answers;

    // for each question...
    for (var i = 0; i < questions.length; i++) {

        // first reset the list of answers
        answers = [];

        // for each available answer...
        for (letter in questions[i].answers) {

            // ...add an html radio button
            answers.push(
                '<label>' +
                '<input type="radio" name="question' + i + '" value="' + letter + '">' +
                letter + ': ' +
                questions[i].answers[letter] +
                '</label>'
            );
        }

        // add this question and its answers to the output
        output.push(
            '<div class="question">' + questions[i].question + '</div>' +
            '<div class="answers">' + answers.join('') + '</div>'
        );
    }

    // finally combine our output list into one string of html and put it on the page
    quizContainer.innerHTML = output.join('');
}


function showResults(questions, quizContainer, resultsContainer) {

    // gather answer containers from our quiz
    var answerContainers = quizContainer.querySelectorAll('.answers');

    // keep track of user's answers
    var userAnswer = '';
    var numCorrect = 0;

    // for each question...
    for (var i = 0; i < questions.length; i++) {

        // find selected answer
        userAnswer = (answerContainers[i].querySelector('input[name=question' + i + ']:checked') || {})
            .value;

        // if answer is correct
        if (userAnswer === questions[i].correctAnswer) {
            // add to the number of correct answers
            numCorrect++;

            // color the answers green
            answerContainers[i].style.color = 'lightgreen';
        }
        // if answer is wrong or blank
        else {
            // color the answers red
            answerContainers[i].style.color = 'red';
        }
    }

    // show number of correct answers out of total
    resultsContainer.innerHTML = numCorrect + ' out of ' + questions.length;
}

// show questions right away
showQuestions(questions, quizContainer);

// on submit, show results
submitButton.onclick = function () {
    showResults(questions, quizContainer, resultsContainer);
}

}
