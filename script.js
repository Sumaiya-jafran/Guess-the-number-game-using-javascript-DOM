// let randNumber = Math.floor(Math.random()*20);
// console.log(randNumber);

let  i=20;
let highestScore = 0;
//1. click event
document.querySelector('#check_btn').addEventListener('click',function(){
    let randNumber = Math.floor(Math.random() * 10);
   //2. random number show
    document.querySelector('.number__box').innerText = randNumber;
  
    //3. prevent event default
    event.preventDefault();

    let inputValue = document.querySelector('#input_value').value;
    let guessingNotification = document.querySelector('#guessing');
    let life = document.querySelector('#score');
    let bgColor = document.querySelector('body');
    let showScore  = document.querySelector('#highScore');
    let finalScore = document.querySelector('#finalscore');
    
    
 
    if(inputValue == ''){
        guessingNotification.innerText=("No Input Provided");
        guessingNotification.style.color = 'red';
        document.querySelector('.number__box').innerText = '?';
    }
    else if(inputValue == randNumber && i > 0) {
        guessingNotification.innerText=("Correct Number");
        i -= 1;
        highestScore += 1;
        life.innerText = i;
        bgColor.style.backgroundColor = '#2EB086';
        //guessingNotification.style.fontSize = '20px';
        showScore.innerText  ="highest score : " + highestScore;

        
    }
    else if(inputValue > randNumber && i > 0) {
        guessingNotification.innerText=("too high");
        i -= 1;
        life.innerText = i;
        bgColor.style.backgroundColor = '#1e1e27';
        guessingNotification.style.color = 'yellow';
        document.querySelector('.number__box').innerText = '?';
        //guessingNotification.style.fontSize = '30px';
    }
    else if(inputValue < randNumber && i > 0) {
        guessingNotification.innerText=("too low");
        i -= 1;
        life.innerText = i;
        bgColor.style.backgroundColor = '#1e1e27';
        guessingNotification.style.color = 'orange';
        document.querySelector('.number__box').innerText = '?';
        //guessingNotification.style.fontSize = '15px';
    }
    else{
        guessingNotification.innerText=('You Dont have life! STOP here');
        life.innerText = ("NO LIFE!!!");
        bgColor.style.backgroundColor = '#8E0505';
        document.querySelector('.number__box').innerText = '?';
        finalScore.innerText = 'Your Final Score is ' + highestScore;
       
    }

})

//reload button
let reloadPage = document.querySelector('#resetButton');
reloadPage.addEventListener('click',function(){
    window.location.reload();
})