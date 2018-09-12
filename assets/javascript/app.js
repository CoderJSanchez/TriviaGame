$(document).ready(function(){

    const ques = $('#question')
    const ans1  = $('#answer1')
    const ans2  = $('#answer2')
    const ans3  = $('#answer3')
    const ans4  = $('#answer4')
    const timeDiv = $('#timeRemaining');
    let timer = 3;
    let intervalID;
    let clockRunning = false;

    $('#startButton').on('click', function(){
        function question1(){
        timeDiv.html('Time Remaining: 00:00')
        ques.html('<h3>How old is the Sun?</h3>');
        ans1.html('answer to question one');
        ans2.html('answer to question one');
        ans3.html('answer to question one');
        ans4.html('answer to question one');
    }
        $('#startButton').hide();
        question1();
        countDown();

    intervalID = setInterval(countDown, 1000);

        function countDown(){
            timer--;
            timeDiv.html(timer);
            if( timer === 0){
                //stopTimer();
                question2();
                
            }
        } 
    
    })
    
    
    function question2(){
        timer = 3;
      
        timeDiv.html(timer)
        ques.html('<h3>Do you like to code?</h3>');
        ans1.html('answer to question two');
        ans2.html('answer to question two');
        ans3.html('answer to question two');
        ans4.html('answer to question two');
        countDown();
    }

    
    
    function stopTimer(){
        clearInterval(intervalID)
    }






















}) // end of ready()