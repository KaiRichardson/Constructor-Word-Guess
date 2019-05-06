var Letter = function (correctChar) {
    this.char = correctChar;
    this.guessed = false;
};

Letter.prototype.toString = function () {
    if (this.guessed) {
        return this.char;
    } else {
        return "_ ";
    };
};

Letter.prototype.guessCorrect = function (guessedChar) {
    if (this.char === guessedChar) {
        this.guessed = true;
     };
     return this.guessed
};

exports = Letter;  