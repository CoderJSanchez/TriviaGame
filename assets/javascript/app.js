$(document).ready(function () {
    let correctAnswerCounter = 0;
    let wrongAnswerCounter = 0;
    let unansweredCounter = 0;
    let questionTrack = 0;
    let intervalID;
    const timeDiv = $('#timeRemaining');
    let timer = 2;
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
            timer = 3;
            nextQuestion();
            //clearInterval(intervalID);
            
        }

        if(questionTrack === questions.length){
            clearInterval(intervalID);
            scorePage();
            
        }
    }

    //array of objects holding questions
    const questions = [
        {
            q: "What make is Michael Scotts car?",
            options: ['Cadillac', 'Chrysler', 'Ford', 'Chevy'],
            correct: 1
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

    function answeredTimer(){
        setTimeout(nextQuestion, 3000);
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
            //console.log(questions[theNextQuestion].correct);
            $('#answerList').append(optionsList);    
        }

        //This should add to the correct/wrong counter, stop the clock, start a new countdown and then move to the next question
        $('.answerListHover').on('click', function(event){
            event.preventDefault();
            clearInterval(intervalID);
            
            
            
            if( $(this).attr('data-correct') == questions[theNextQuestion].options[questions[theNextQuestion].correct] ){
                correctAnswerCounter++;
                alert('Match');
            }
            //This is just so I can test what is being output
            console.log( `This is $(this) ${$(this).attr('data-correct')}` ); //text
            console.log( `This is questions.correct ${questions[theNextQuestion].correct}` );//integer
            console.log(correctAnswerCounter);
            
        
        })

        
    }

    function scorePage(){
        $('#questionRow').empty();
        $('#answerList').empty();
        $('#timeRemaining').empty();
        $('#correct').html('<h2>You got ' + correctAnswerCounter + ' correct!</h2>');
        $('#incorrect').html('<h2> You got ' + wrongAnswerCounter + ' wrong.</h2>');
        $('#unanswered').html('<h2> You did not answer ' + unansweredCounter + ' questions.</h2>');

    }

   

}) // end of ready()


//psudo-code

//CLICKING ON AN ANSWER
  //I STARTED BUT DID NOT FIGURE OUT HOW TO SELECT MAKE THE DATA SELECTED BY THE USER MATCH THE CORRECT ANSWER
  //IF THEY MATCHED THE CORRECT COUNTER WOULD GO UP BY ONE
  //ELSE THE WRONG COUNTER WOULD GO UP BY ONE

//CHANGING TO NEXT QUESTION AFTER CLICK
  //AFTER A A SELECTION IS MADE I USED CLEARTIMEOUT(INTERVALID) TO STOP THE TIMER
  // I KNEW I NEEDED TO USE SETTIMEOUT(FUNCTION, 3000) TO MOVE ON TO THE NEXT QUESTION. I FELT I NEEDED
  // TO USE SETTIMEOUT(NEXTQUESTION, 3000) BUT I COULD NOT MAKE IT CHANGE 

// CURRENTLY IF NO QUESTIONS ARE SELECTED, THE APP WILL ++ THE UNANSWERED COUNTER AND THEN EMPTY() THE DIVS
//AND DISPLY THE NUMBER OF CORRECT, WRONG AND UNANSWERED QUESTIONS

//SHOWING AN IMAGE
  //IF I WAS TO GET THE CORRECT ANSWER TO BE SELECTED I WAS GOING TO DISPLAY A GIF BY
  //USING A FOR LOOP TO ITERATE THE OBJECT AND GENERATE AN <IMG>, ADD AN ATTR() OF 'SRC' WITH THE LINK
  //TO THE IMAGE
  //CURRENTLY I DO NOT HAVE THE KEY:VALUE PAIR IN THE OBJECT WITHT HE IMG LINKS