let numberOfLines = 5;
let texts = [{ word1: 'balon', word2: 'valoran' }, { word1: 'remar', word2: 'dormir' }]

//console.log('forEach')
//texts.forEach((text) => console.log(validateWords(text.word1.split(''), text.word2.split(''))))
console.log('filter')
texts.forEach((text) => console.log(validateWordsFindIndex(text.word1.split(''), text.word2.split(''))))

function validateWords(word1, word2) {
    return word1.filter((letter) => word2.includes(letter))
}

function validateWordsFindIndex(word1, word2) {
    let words = []
    word1.forEach((letter) => {
        console.log(`letter ${letter}`)
        word2.find((element, index) => {
            if (element === letter) {
                console.log(`le index ${index}`)
                console.log(`word2 ${word2}`)
                word2.splice(index, 1)
                words.push(element)
                return word2
            }
        })
    })
    return words
}

