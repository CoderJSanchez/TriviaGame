$(document).ready(function(){

    const ques = $('#question')
    const ans1  = $('#answer1')
    const ans2  = $('#answer2')
    const ans3  = $('#answer3')
    const ans4  = $('#answer4')
    const timeDiv = $('#timeRemaining');
    let timer = 30;
    let intervalID;
    let clockRunning = false;

    $('#startButton').on('click', function(){
        $('#startButton').hide();
        question1();
        countDown();

        intervalID = setInterval(countDown, 1000);

    function countDown(){
        timer--;
        timeDiv.html(timer);
        if( timer === 20){
            stopTimer();
        }
    }
        
    })
    
    function question1(){
        timeDiv.html('Time Remaining: 00:00')
        ques.html('<h3>How old is the Sun?</h3>');
        ans1.html('answer to question one');
        ans2.html('answer to question one');
        ans3.html('answer to question one');
        ans4.html('answer to question one');
    }

    
    //countDown();
    console.log(timer);
    
    function stopTimer(){
        clearInterval(intervalID)
    }






















}) // end of ready()