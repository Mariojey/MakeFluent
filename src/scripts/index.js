import dataEnglish from '../data/data2.js'
import dataGermany from '../data/data3.js'
import dataEnglishHealthVocabulary from '../data/health.js'
import dataEnglishHealthGrammar from '../data/grammar.health.js'
import dataEnglishHealthListening from '../data/listening.health.js'
import dataEnglishHealthReading from '../data/reading.health.js'


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

const hasHealthVocabulary = new URLSearchParams(window.location.search).get("EnglishHealthVocabulary");
const hasHealthGrammar = new URLSearchParams(window.location.search).get("EnglishHealthGrammar");
const hasEarthVocabulary = new URLSearchParams(window.location.search).get("EnglishEarthVocabulary");
const hasMedikamentVocabulary = new URLSearchParams(window.location.search).get("GermanyHealthVocabulary");
const hasHealthListening = new URLSearchParams(window.location.search).get("EnglishHealthListening");
const hasHealthReading = new URLSearchParams(window.location.search).get("EnglishHealthReading");

console.log(hasHealthVocabulary);

function getTimestampInSeconds() {
    return Math.floor(Date.now() / 1000)
}

function setEnglishWord(idWord, database) {
    database.forEach(item => {
        if (item.id == idWord) {
            textToTranslate.textContent = item.translating;
        }
    })
}

function setGermanyWord(idWord, database) {
    database.forEach(item => {
        if (item.id == idWord) {
            textToTranslate.textContent = item.translating;
        }
    })
}
if (hasHealthReading) {
    if (btnEnglish) {
        console.log('hi');
        btnEnglish.addEventListener('click', () => {
            dataEnglishHealthReading.forEach(item => {
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
                            setEnglishWord(idWord, dataEnglishHealthListening)
                            insertWord.textContent = '';
                        }
                    }

                }
            })

        })
        showMeBtn.addEventListener('click', () => {
            dataEnglishHealthReading.forEach(item => {
                if (item.id == idWord) {
                    hiddentext.textContent = item.word
                }
            })
            falls += 1;
            fallAnswers.textContent = falls;
        })

        const timeOnStart = getTimestampInSeconds();
        setEnglishWord(idWord, dataEnglishHealthReading)
    }
}
if (hasHealthListening) {
    if (btnEnglish) {
        console.log('hi');
        btnEnglish.addEventListener('click', () => {
            dataEnglishHealthListening.forEach(item => {
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
                            setEnglishWord(idWord, dataEnglishHealthListening)
                            insertWord.textContent = '';
                        }
                    }

                }
            })

        })
        showMeBtn.addEventListener('click', () => {
            dataEnglishHealthListening.forEach(item => {
                if (item.id == idWord) {
                    hiddentext.textContent = item.word
                }
            })
            falls += 1;
            fallAnswers.textContent = falls;
        })

        const timeOnStart = getTimestampInSeconds();
        setEnglishWord(idWord, dataEnglishHealthListening)
    }
}
if (hasHealthVocabulary) {
    if (btnEnglish) {
        console.log('hi');
        btnEnglish.addEventListener('click', () => {
            dataEnglishHealthVocabulary.forEach(item => {
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
                            setEnglishWord(idWord, dataEnglishHealthVocabulary)
                            insertWord.textContent = '';
                        }
                    }

                }
            })

        })
        showMeBtn.addEventListener('click', () => {
            dataEnglishHealthVocabulary.forEach(item => {
                if (item.id == idWord) {
                    hiddentext.textContent = item.word
                }
            })
            falls += 1;
            fallAnswers.textContent = falls;
        })

        const timeOnStart = getTimestampInSeconds();
        setEnglishWord(idWord, dataEnglishHealthVocabulary)
    }
}
//HEALTH - GRAMMAR
if (hasHealthGrammar) {
    if (btnEnglish) {
        console.log('hi');
        btnEnglish.addEventListener('click', () => {
            dataEnglishHealthGrammar.forEach(item => {
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
                            setEnglishWord(idWord, dataEnglishHealthGrammar)
                            insertWord.textContent = '';
                        }
                    }

                }
            })

        })
        showMeBtn.addEventListener('click', () => {
            dataEnglishHealthGrammar.forEach(item => {
                if (item.id == idWord) {
                    hiddentext.textContent = item.word
                }
            })
            falls += 1;
            fallAnswers.textContent = falls;
        })

        const timeOnStart = getTimestampInSeconds();
        setEnglishWord(idWord, dataEnglishHealthGrammar)
    }
}
if (hasMedikamentVocabulary) {
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
                            setGermanyWord(idWord, dataGermany)
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
        setGermanyWord(idWord, dataGermany)
    }
}
if (hasEarthVocabulary) {
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
                            setEnglishWord(idWord, dataEnglish)
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
        setEnglishWord(idWord, dataEnglish)
    }
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