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
export default function checkWord(isChapterSet,
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
    fallAnswers,
    dbName
) {
    if (isChapterSet) {
        if (btnEnglish) {
            console.log('hi system is working');
            btnEnglish.addEventListener('click', () => {
                database.forEach(item => {
                    if (item.id == idWord) {
                        if (insertWord.value == item.word) {
                            hiddentext.textContent = ''
                            correctAnswer += 1;
                            localStorage.setItem(`correctAnswer${dbName}`, correctAnswer);
                            console.log('Hello');
                            isCorrect.textContent = "Poprawna odpowiedź";
                            idWord += 1;
                            localStorage.setItem(`idWord${dbName}`, idWord);
                            console.log(idWord);
                            console.log(correctAnswer);
                            correctAnswers.textContent = correctAnswer;
                            console.log();
                            if (idWord >= database.length) {
                                const timeOnStop = getTimestampInSeconds();
                                const time = timeOnStop - timeOnStart;
                                textToTranslate.textContent = `To było ostatnie pytanie twój czas to: ${time} sekund`
                                localStorage.removeItem(`idWord${dbName}`)
                                localStorage.removeItem(`correctAnswer${dbName}`)
                                localStorage.removeItem(`falls${dbName}`)
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
                localStorage.setItem(`falls${dbName}`, falls);
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
                            localStorage.setItem(`correctAnswer${dbName}`, correctAnswer);
                            isCorrect.textContent = "Poprawna odpowiedź";
                            idWord += 1;
                            localStorage.setItem(`idWord${dbName}`, idWord)
                            console.log(idWord);
                            console.log(correctAnswer);
                            correctAnswers.textContent = correctAnswer;
                            if (idWord > 122) {
                                const timeOnStop = getTimestampInSeconds();
                                const time = timeOnStop - timeOnStart;
                                alert(time / 60)
                                localStorage.removeItem(`idWord${dbName}`)
                                localStorage.removeItem(`correctAnswer${dbName}`)
                                localStorage.removeItem(`falls${dbName}`)
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
                localStorage.setItem(`falls${dbName}`, falls);
                fallAnswers.textContent = falls;
            })

            const timeOnStart = getTimestampInSeconds();
            setGermanyWord(idWord, database)
        }
    }
}