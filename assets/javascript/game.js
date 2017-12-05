//Array of words

const words = ["germany", "portugal", "spain", "brazil", "peru", "colombia", "france", "iceland", "england", "russia"];

//Choose word randomly
let randNum = [Math.floor(Math.random() * words.length)];
let rightWord = [];
let wrongWord = [];
let docArray= document.getElementsByClassName('underscores');
let docRightGuess= document.getElementsByClassName('rightGuess');
let docWrongGuess= document.getElementsByClassName('wrongGuess');

let guessWord = words[randNum];
console.log(guessWord)
let array = []


//Create underscores based on length
let usLength = () => {
    for (var i = 0; i < words.length; i++) {
        array.push('_');
    }
    return array;
}
console.log(usLength());
//Get users guess
document.addEventListener('keypress', (event) => {
    let keyWord = String.fromCharCode(event.keyCode);
    console.log(keyWord);
    if (guessWord.indexOf(keyWord) > -1) {
        rightWord.push(keyWord);
        docArray[0].innerHTML= array.join('');
        docRightGuess[0].innerHTML= 'Right Letters: ' + rightWord;
        array[guessWord.indexOf(keyWord)] = keyWord;
        if (array.join('') == guessWord) {
          alert('You Win');
        }
      }
      else{
        wrongWord.push(keyWord);
        docWrongGuess[0].innerHTML='Wrong Letters :' + wrongWord;
      }

});
array[0].innerHTML=usLength().join(' ');











//Check if right
//if right push to right array
//if wrong push to left array