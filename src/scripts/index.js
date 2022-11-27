import dataEnglish from '../data/data2.js'
import dataGermany from '../data/data3.js'

const textToTranslate = document.getElementById('textToTranslate');
const insertWord = document.getElementById('insertWord');
const btn = document.getElementById('btn');
const btnEnglish = document.getElementById('btnEnglish');
const btnGermany = document.getElementById('btnGermany');
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

function setEnglishWord(idWord) {
    dataEnglish.forEach(item => {
        if (item.id == idWord) {
            textToTranslate.textContent = item.translating;
        }
    })
}

function setGermanyWord(idWord) {
    dataGermany.forEach(item => {
        if (item.id == idWord) {
            textToTranslate.textContent = item.translating;
        }
    })
}
if (btnGermany) {
    console.log('Hi');
    btnGermany.addEventListener('click', () => {
        dataGermany.forEach(item => {
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
                        setGermanyWord(idWord)
                        insertWord.textContent = '';
                    }
                }

            }
        })

    })
    showMeBtn.addEventListener('click', () => {
        dataGermany.forEach(item => {
            if (item.id == idWord) {
                hiddentext.textContent = item.word
            }
        })
        falls += 1;
        fallAnswers.textContent = falls;
    })

    const timeOnStart = getTimestampInSeconds();
    setGermanyWord(idWord)
}
if (btnEnglish) {
    console.log('hi');
    btnEnglish.addEventListener('click', () => {
        dataEnglish.forEach(item => {
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
                        setEnglishWord(idWord)
                        insertWord.textContent = '';
                    }
                }

            }
        })

    })
    showMeBtn.addEventListener('click', () => {
        dataEnglish.forEach(item => {
            if (item.id == idWord) {
                hiddentext.textContent = item.word
            }
        })
        falls += 1;
        fallAnswers.textContent = falls;
    })

    const timeOnStart = getTimestampInSeconds();
    setEnglishWord(idWord)
}


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