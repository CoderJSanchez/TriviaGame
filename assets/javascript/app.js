$(document).ready(function () {
    let correctAnswerCounter = 0;
    let wrongAnswerCounter = 0;
    let unansweredCounter = 0;
    let questionTrack = 0;
    let intervalID;
    const timeDiv = $('#timeRemaining');
    let timer = 5;
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
            questionTrack++;
            unansweredCounter++;
            timer = 6;
            nextQuestion();
            //clearInterval(intervalID);
            
        }

        if(questionTrack === questions.length){
            clearInterval(intervalID);
            alert('that was the last question');
        }
    }

    //array of objects holding questions
    const questions = [
        {
            q: "What make is Michael Scotts car?",
            options: ['Cadillac', 'Chrysler', 'Ford', 'Chevy'],
            correct: 0
        },
        {
            q: "Who does Dwight date?",
            options: ['Pam', 'Jan', 'Meradeth', 'Angela'],
            correct: 3
        },
        {
            q: "What is Andy's job?",
            options: ['Warehouse', 'Sales', 'Accounting', 'Front-desk'],
            correct: 1
        },
        {
            q: "What is Dwights middle name?",
            options: ['Kurt', 'Sam', 'Chris', 'Wyane'],
            correct: 0
        },
        {
            
            q: "In which season do Jim and Pam start dating?",
            options: ['Season 1', 'Season 2', 'Season 3', 'Season 4'],
            correct: 3
            
        }

    ];

    function nextQuestion(){
        n();
    }

    function n(){
       
        var theNextQuestion = questionTrack;
        $('#questionRow').text(questions[theNextQuestion].q);
        $('#answerList').empty();
        for(let j = 0; j < 5; j++){
            var optionsList = $('<div>');
            optionsList.text(questions[theNextQuestion].options[j]);
            optionsList.addClass('col-md-12 text-center answerListHover');
            let rightIndex = questions[theNextQuestion].correct
            optionsList.attr('data-correct', questions[theNextQuestion].options[rightIndex]);
            console.log(questions[theNextQuestion].correct);
            $('#answerList').append(optionsList);    
        }
        
        $('.answerListHover').on('click', function(event){
            event.preventDefault();
            clearInterval(intervalID);
            
            if( $(this).attr('data-correct') == questions[theNextQuestion].correct ){
                alert('Match');
            }

            console.log( `This is $(this) ${$(this).attr('data-correct')}` ); //text
            console.log( `This is questions.correct ${questions[theNextQuestion].correct}` );//integer
            
        
        })
    }

   

   
   

    
 
}) // end of ready()