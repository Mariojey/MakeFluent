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
export default function checkWord(nameOfChapter,
    btnEnglish,
    btnGermany,
    database,
    idWord,
    insertWord,
    correctAnswer,
    correctAnswers,
    isCorrect,
    textToTranslate,
    showMeBtn,
    hiddentext,
    falls,
    fallAnswers
) {
    if (nameOfChapter) {
        if (btnEnglish) {
            console.log('hi');
            btnEnglish.addEventListener('click', () => {
                database.forEach(item => {
                    if (item.id == idWord) {
                        if (insertWord.value == item.word) {
                            hiddentext.textContent = ''
                            correctAnswer += 1;
                            console.log('Hello');
                            isCorrect.textContent = "Poprawna odpowiedź";
                            idWord += 1;
                            console.log(idWord);
                            console.log(correctAnswer);
                            correctAnswers.textContent = correctAnswer;
                            console.log();
                            if (idWord > database.length) {
                                const timeOnStop = getTimestampInSeconds();
                                const time = timeOnStop - timeOnStart;
                                textToTranslate.textContent = `To było ostatnie pytanie twój czas to: ${time}`
                            } else {
                                setEnglishWord(idWord, database)
                                insertWord.textContent = '';
                            }
                        }

                    }
                })

            })
            showMeBtn.addEventListener('click', () => {
                database.forEach(item => {
                    if (item.id == idWord) {
                        hiddentext.textContent = item.word
                    }
                })
                falls += 1;
                fallAnswers.textContent = falls;
            })

            const timeOnStart = getTimestampInSeconds();
            setEnglishWord(idWord, database)
        }
        if (btnGermany) {
            console.log('Hi');
            btnGermany.addEventListener('click', () => {
                database.forEach(item => {
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
                                setGermanyWord(idWord, database)
                                insertWord.textContent = '';
                            }
                        }

                    }
                })

            })
            showMeBtn.addEventListener('click', () => {
                database.forEach(item => {
                    if (item.id == idWord) {
                        hiddentext.textContent = item.word
                    }
                })
                falls += 1;
                fallAnswers.textContent = falls;
            })

            const timeOnStart = getTimestampInSeconds();
            setGermanyWord(idWord, database)
        }
    }
}