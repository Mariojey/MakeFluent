import dataEnglish1 from '../data/data.js'
import dataEnglish from '../data/data2.js'
import dataGermany from '../data/data3.js'
import dataEnglishHealthVocabulary from '../data/health.js'
import dataEnglishHealthGrammar from '../data/grammar.health.js'
import dataEnglishHealthListening from '../data/listening.health.js'
import dataEnglishHealthReading from '../data/reading.health.js'
import dataEnglishHealthUseOfEnglish from '../data/useofenglish.health.js'

import checkWord from './modules/system.module.js'
import localSavesVariablesSuffixes from './utils/utils.js'

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

/*
let fallsdataEnglish1 = 0;
let fallsdataEnglish = 0;
let fallsdataGermany = 0;
let fallsdataEnglishHealthVocabulary = 0;
let fallsdataEnglishHealthGrammar = 0;
let fallsdataEnglishHealthListening = 0;
let fallsdataEnglishHealthReading = 0;
let correctAnswerdataEnglish1 = 0;
let correctAnswerdataEnglish = 0;
let correctAnswerdataGermany = 0;
let correctAnswerdataEnglishHealthVocabulary = 0;
let correctAnswerdataEnglishHealthGrammar = 0;
let correctAnswerdataEnglishHealthListening = 0;
let correctAnswerdataEnglishHealthReading = 0;
let idWorddataEnglish1 = 0;
let idWorddataEnglish = 0;
let idWorddataGermany = 0;
let idWorddataEnglishHealthVocabulary = 0;
let idWorddataEnglishHealthGrammar = 0;
let idWorddataEnglishHealthListening = 0;
let idWorddataEnglishHealthReading = 0;
*/

let falls = 0;
let idWord = 0;
let correctAnswer = 0;

//It should be modify that if system find in URL one of the variables search in localStorage 





const hasHealthVocabulary = new URLSearchParams(window.location.search).get("EnglishHealthVocabulary");
const hasHealthGrammar = new URLSearchParams(window.location.search).get("EnglishHealthGrammar");
const hasEarthVocabulary = new URLSearchParams(window.location.search).get("EnglishEarthVocabulary");
const hasEarthVocabulary1 = new URLSearchParams(window.location.search).get("EnglishEarthVocabularyFirst");
const hasMedikamentVocabulary = new URLSearchParams(window.location.search).get("GermanyHealthVocabulary");
const hasHealthListening = new URLSearchParams(window.location.search).get("EnglishHealthListening");
const hasHealthReading = new URLSearchParams(window.location.search).get("EnglishHealthReading");
const hasHealthUseOfEnglish = new URLSearchParams(window.location.search).get("EnglishHealthUseOfEnglish")

const arrayOfURLParams = [
    hasHealthVocabulary,
    hasHealthGrammar,
    hasEarthVocabulary,
    hasEarthVocabulary1,
    hasMedikamentVocabulary,
    hasHealthListening,
    hasHealthReading,
    hasHealthUseOfEnglish
]

const arrayOfURLParamsNames = [
    `hasHealthVocabulary`,
    `hasHealthGrammar`,
    `hasEarthVocabulary`,
    `hasEarthVocabulary1`,
    `hasMedikamentVocabulary`,
    `hasHealthListening`,
    `hasHealthReading`,
    `hasHealthUseOfEnglish`
]




function getLocalSavesVariables(suffixOfVariableInStorage) {
    console.log(`Test`);

    for (let i = 0; i < localSavesVariablesSuffixes.length; i++) {

        let probablyNameIdWord = `idWord${suffixOfVariableInStorage}`;
        let probablyNameFalls = `falls${suffixOfVariableInStorage}`;
        let probablyNameCorrectAnswer = `correctAnswer${suffixOfVariableInStorage}`;

        if (localStorage.getItem(probablyNameIdWord) !== null) {
            idWord = parseInt(localStorage.getItem(probablyNameIdWord))
        }
        if (localStorage.getItem(probablyNameFalls) !== null) {
            falls = parseInt(localStorage.getItem(probablyNameFalls))
        }
        if (localStorage.getItem(probablyNameCorrectAnswer) !== null) {
            correctAnswer = parseInt(localStorage.getItem(probablyNameCorrectAnswer))
        }
    }


    /*
    for (let i = 0; i < localSavesVariablesFalls.length; i++) {

        if (localSavesVariablesFalls[i].includes(nameOfVariableInStorage)) {
            if (localStorage.getItem(localSavesVariablesFalls[i]) !== null) {
                console.log(`${localSavesVariablesFalls[i]}`);
                falls = parseInt(localStorage.getItem(localSavesVariablesFalls[i]))
                console.log(falls);
            } else {
                falls = 0;
            }
        }
    }
    for (let i = 0; i < localSavesVariablesCorrectAnswer.length; i++) {
        if (localSavesVariablesCorrectAnswer[i].includes(nameOfVariableInStorage)) {

            if (localStorage.getItem(localSavesVariablesCorrectAnswer[i]) !== null) {
                correctAnswer = localStorage.getItem(localSavesVariablesCorrectAnswer[i])
            } else {
                correctAnswer = 0;
            }
        }

    }
    for (let i = 0; i < localSavesVariablesidWord.length; i++) {

        if (localSavesVariablesidWord[i].includes(nameOfVariableInStorage)) {
            if (localStorage.getItem(localSavesVariablesidWord[i]) !== null) {
                idWord = parseInt(localStorage.getItem(localSavesVariablesidWord[i]))
                console.log(`idWord ${idWord} ${localSavesVariablesidWord[i]}`);
            } else {
                idWord = 0;
            }
        }

    }
*/

}


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

for (let i = 0; i < arrayOfURLParams.length; i++) {
    if (arrayOfURLParams[i]) {
        getLocalSavesVariables(localSavesVariablesSuffixes[i])


    }

}
checkWord(hasHealthUseOfEnglish,
    btnEnglish,
    btnGermany,
    dataEnglishHealthUseOfEnglish,
    idWord,
    insertWord,
    correctAnswer,
    correctAnswers,
    isCorrect,
    textToTranslate,
    showMeBtn,
    hiddentext,
    falls,
    fallAnswers,
    `dataEnglishHealthUseOfEnglish`)

checkWord(hasHealthReading,
    btnEnglish,
    btnGermany,
    dataEnglishHealthReading,
    idWord,
    insertWord,
    correctAnswer,
    correctAnswers,
    isCorrect,
    textToTranslate,
    showMeBtn,
    hiddentext,
    falls,
    fallAnswers,
    `dataEnglishHealthReading`)


checkWord(hasHealthListening,
    btnEnglish,
    btnGermany,
    dataEnglishHealthListening,
    idWord,
    insertWord,
    correctAnswer,
    correctAnswers,
    isCorrect,
    textToTranslate,
    showMeBtn,
    hiddentext,
    falls,
    fallAnswers,
    `dataEnglishHealthListening`)

checkWord(hasHealthVocabulary,
    btnEnglish,
    btnGermany,
    dataEnglishHealthVocabulary,
    idWord,
    insertWord,
    correctAnswer,
    correctAnswers,
    isCorrect,
    textToTranslate,
    showMeBtn,
    hiddentext,
    falls,
    fallAnswers,
    `dataEnglishHealthVocabulary`)

checkWord(hasHealthGrammar,
    btnEnglish,
    btnGermany,
    dataEnglishHealthGrammar,
    idWord,
    insertWord,
    correctAnswer,
    correctAnswers,
    isCorrect,
    textToTranslate,
    showMeBtn,
    hiddentext,
    falls,
    fallAnswers,
    `dataEnglishHealthGrammar`)

checkWord(hasEarthVocabulary,
    btnEnglish,
    btnGermany,
    dataEnglish,
    idWord,
    insertWord,
    correctAnswer,
    correctAnswers,
    isCorrect,
    textToTranslate,
    showMeBtn,
    hiddentext,
    falls,
    fallAnswers,
    `dataEnglish`)

checkWord(hasEarthVocabulary1,
    btnEnglish,
    btnGermany,
    dataEnglish1,
    idWord,
    insertWord,
    correctAnswer,
    correctAnswers,
    isCorrect,
    textToTranslate,
    showMeBtn,
    hiddentext,
    falls,
    fallAnswers,
    `dataEnglish1`)


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