$(document).ready(function () {
    let intervalID;
    const timeDiv = $('#timeRemaining');
    let timer = 3;
    //all content is hidden until START button is clicked, then the button is hidden and 
    //the below functions are called and the timer is shown.
    $('#startButton').on('click', function () {
        $(this).hide();
        timeDiv.html(timer);
        startCountDown();
        nextQuestion();
    }) //End of on.click 

    //function to hold setInterval.  It us called when the START click happens
    function startCountDown() {
        intervalID = setInterval(countDown, 1000);
    }
    //function to decrement the timer and stop it when it reaches 0
    function countDown() {
        timer--;
        timeDiv.html(timer);
        if(timer === 0){
            timer = 4;
            nextQuestion();
            //clearInterval(intervalID);
        }
    }

    
    //array of objects holding questions
    const questions = [
        {
            q: "What make is Michael Scotts car?",
            options: ['Cadillac', 'Chrysler', 'Ford', 'Chevy'],
            correct: "cadillac"
        },
        {
            q: "Who does Dwight date?",
            options: ['Pam', 'Jan', 'Meradeth', 'Angela'],
            correct: 'Angela'
        },
        {
            q: "What is Andy's job?",
            options: ['Warehouse', 'Sales', 'Accounting', 'Front-desk'],
            correct: 'Sales'
        },
        {
            q: "What is Dwights middle name?",
            options: ['Kurt', 'Sam', 'Chris', 'Wyane'],
            correct: 'Kurt'
        },
        {
            
            q: "In which season do Jim and Pam start dating?",
            options: ['Season 1', 'Season 2', 'Season 3', 'Season 4'],
            correct: 'Season 4'
            
        }

    ];

    function nextQuestion(){
        showQuestion();
    }

    function showQuestion(){
        var randomQuestion = Math.floor(Math.random() * 5);
        $('#questionRow').text(questions[randomQuestion].q);
        $('#answerRow1').text(questions[randomQuestion].options[0]);
        $('#answerRow2').text(questions[randomQuestion].options[1]);
        $('#answerRow3').text(questions[randomQuestion].options[2]);
        $('#answerRow4').text(questions[randomQuestion].options[3]);
       
    }
    // function makeRandomQuestion(){
    //     var randomQuestion = Math.floor(Math.random() * 5);
    // }
    

    

    

 
















}) // end of ready()