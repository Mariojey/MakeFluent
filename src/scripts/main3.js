import data from '../data/data3.js'

const textToTranslate = document.getElementById('textToTranslate');
const insertWord = document.getElementById('insertWord');
const btn = document.getElementById('btn');
const isCorrect = document.getElementById('isCorrect');
const correctAnswers = document.getElementById('correctAnswers');
const hiddentext = document.getElementById('hiddentext');
const showMeBtn = document.getElementById('showMeBtn');
const fallAnswers = document.getElementById('fallAnswers')

let falls = 0;
let correctAnswer = 0;
let idWord = 0

function getTimestampInSeconds() {
    return Math.floor(Date.now() / 1000)
}

function setWord(idWord) {
    data.forEach(item => {
        if (item.id == idWord) {
            textToTranslate.textContent = item.translating;
        }
    })
}

btn.addEventListener('click', () => {
    data.forEach(item => {
        if (item.id == idWord) {
            if (insertWord.value == item.word) {
                correctAnswer += 1;
                isCorrect.textContent = "Poprawna odpowiedź";
                idWord += 1;
                console.log(idWord);
                console.log(correctAnswer);
                correctAnswers.textContent = correctAnswer;
                if (idWord > 122) {
                    const timeOnStop = getTimestampInSeconds();
                    const time = timeOnStop - timeOnStart;
                    alert(time / 60)
                } else {
                    setWord(idWord)
                    insertWord.textContent = '';
                }
            }

        }
    })

})
showMeBtn.addEventListener('click', () => {
    data.forEach(item => {
        if (item.id == idWord) {
            hiddentext.textContent = item.word
        }
    })
    falls += 1;
    fallAnswers.textContent = falls;
})

const timeOnStart = getTimestampInSeconds();
setWord(idWord);

/*
btn.addEventListener('click', () => {
    data.forEach(item => {
        if (item.id == idWord) {
            textToTranslate.textContent = item.translating;
            if (insertWord.value == item.word) {
                correctAnswer += 1;
                isCorrect.textContent = "Poprawna odpowiedź";
                idWord += 1;
                console.log(idWord);
                console.log(correctAnswer);
                correctAnswers.textContent = correctAnswer;
            }
        }
    })
})
*/