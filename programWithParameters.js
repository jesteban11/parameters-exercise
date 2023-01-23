const rli = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

let texts = [];

function input(prompt) {
    return new Promise((callbackFn, errorFn) => {
        rli.question(prompt, (uinput) => {
            callbackFn(uinput);
        }, () => {
            errorFn();
        });
    });
}

async function iterateNumberOfLines(numberOfLines) {
    if (numberOfLines > 0) {
        for (let iteration = 1; iteration <= numberOfLines; iteration++) {
            uname = await input("Enter two words with a space: ");
            pushWords(uname);
        }
    } else {
        console.log('Please enter a number')
        
    }
}

async function pushWords(uname, iteration) {
    if (uname.split(' ')[0] && uname.split(' ')[1]) {
        texts.push({ word1: uname.split(' ')[0], word2: uname.split(' ')[1] })
    }else{
        console.log('You should enter two words with space between them')   
        
    }
}

function validateWordsFindIndex(word1, word2) {
    let words = []
    word1.forEach((letter) => {
        word2.find((element, index) => {
            if (element.toUpperCase() === letter.toUpperCase()) {
                word2.splice(index, 1)
                words.push(element)
                return word2
            }
        })
    })
    return words
}

const askQuestions = async () => {
    numberOfLines = await input("Enter the number of lines: ");
    await iterateNumberOfLines(numberOfLines);
    await texts.forEach((text) => console.log(validateWordsFindIndex(text.word1.split(''), text.word2.split(''))))
    rli.close();
};

askQuestions();