var Letter = require("./letter.js");
// var wordArr = [];

// for (let i = 0; i < word.length; i++) {
//     wordArr.push(new Letter(word[i]));
// };

// var Word = function (wordArr) {
//     this.wordArr = wordArr;
// };

// Word.prototype.stringTogether = function () {
//     return this.wordArr.join(" ");
// };

// Letter.prototype.guessCorrect = function () {
//     if (this.char === guessedChar) {
//         this.guessed = true;
//     };
// };

// var randWord = "word"

var word = "word"
var wordArr = [];

for (let i = 0; i < word.length; i++) {
    wordArr.push(new Letter(word[i]));
};

console.log(wordArr[1].guessCorrect("e"));
// console.log(wordArr.join(" "));
// console.log(wordArr[1].toString());

// module.exports.Word = Word;  