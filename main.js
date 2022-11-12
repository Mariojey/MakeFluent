import data from './data.js'

const textToTranslate = document.getElementById('textToTranslate');
const insertWord = document.getElementById('insertWord');
const btn = document.getElementById('btn');
const isCorrect = document.getElementById('isCorrect');
const correctAnswers = document.getElementById('correctAnswers');

let correctAnswer = 0;
let idWord = 0


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