//Array of words


const words = ["germany", "portugal", "spain", "brazil", "peru", "denmark", "france", "iceland", "mexico"];

//Choose word randomly
let randNum = [Math.floor(Math.random() * words.length)];
let rightWord = [];
let wrongWord = [];
let wins = 0;
let docArray = document.getElementsByClassName('underscores');
let docRightGuess = document.getElementsByClassName('rightGuess');
let docWrongGuess = document.getElementsByClassName('wrongGuess');
guessWord=words[randNum];
console.log(guessWord);
let array = [];
let audio = new Audio('assets/images/song.mp3');

function myFunction(){
  document.getElementById("maradona").innerHTML=console.log("Diego Maradona");
  alert("Diego Maradona");
}

function myFunction2(){
  document.getElementById("pele").innerHTML=console.log("Pele");
  alert("Pele");
}

function myFunction3(){
  document.getElementById("zidane").innerHTML=console.log("Zinedine Zidane");
  alert("Zinedine Zidane");
}



//Reset
function reSet() {
    docArray=[];
    array=0;
    guessWord=null;
    guessWord=words[randNum];
    console.log(guessWord);
    rightWord=0;
    wrongWord=0;
    $('.rightGuess').empty();
    $('.rightGuess').text('Right Letters: ');
    $('.wrongGuess').text('Wrong Letters: ');
    audio.play();
    $('.underscores').empty();
    
    console.log(guessWord);
     }




//Create underscores based on length
let usLength = () => {
    for (var i = 0; i < guessWord.length; i++) {
        array.push(' _ ');
    }
    return array;
}
console.log(usLength());
document.getElementsByClassName('underscores').innerHTML = usLength;

//Get users guess
document.addEventListener('keypress', (event) => {
    let keyWord = String.fromCharCode(event.keyCode);
    console.log(keyWord);
    if (guessWord.indexOf(keyWord) > -1) {
        rightWord.push(keyWord);
        docArray[0].innerHTML = array.join('');
        docRightGuess[0].innerHTML = 'Right Letters: ' + rightWord;
        array[guessWord.indexOf(keyWord)] = keyWord;
        if (array.join('') == guessWord) {
            wins++;
            alert('You Win');
            $('.wins').text('Wins:' + wins);
            //goal score mp3
            var playAgain = confirm('Play Again?');
            if (playAgain) {
                reSet();
            } else {
                alert('You suck');
                

            }



        }
    } else {
        wrongWord.push(keyWord);
        docWrongGuess[0].innerHTML = 'Wrong Letters :' + wrongWord;
    }

});
//array[0].innerHTML=usLength().join(' ');


//Check if right
//if right push to right array
//if wrong push to left array

//function addtwo(a, b) { return a + b;}console.log(addtwo(2, 5));