import dataEnglish from '../src/data/data2.js'
import dataGermany from '../src/data/data3.js'

const textToTranslate = document.getElementById('textToTranslate') as HTMLDivElement;
const insertWord = document.getElementById('insertWord') as HTMLInputElement | null;
const btnEnglish = document.getElementById('btnEnglish') as HTMLButtonElement | null;
const btnGermany = document.getElementById('btnGermany') as HTMLButtonElement | null;
const isCorrect = document.getElementById('isCorrect') as HTMLDivElement;
const correctAnswers = document.getElementById('correctAnswers') as HTMLDivElement | null;
const hiddentext = document.getElementById('hiddentext') as HTMLDivElement | null;
const showMeBtn = document.getElementById('showMeBtn') as HTMLButtonElement | null;
const fallAnswers = document.getElementById('fallAnswers') as HTMLDivElement | null;

let falls:number= 0;
let correctAnswer:number =0;
let idWord:number = 0;

function getTimestampInSeconds(){
    return Math.floor(Date.now() / 1000)
}

function setEnglishWord(idWord: number){
    dataEnglish?.forEach(item => {
        if(item.id == idWord){
            textToTranslate.textContent = item.translating;
        }
    })
}

function setGermanyWord(idWord: number){
    dataGermany?.forEach(item => {
        if(item.id == idWord){
            textToTranslate.textContent = item.translating;
        }
    })
}
if(btnGermany){
    btnGermany?.addEventListener('click', () => {
        dataGermany?.forEach(item => {
            if (item.id == idWord) {
                if(insertWord?.value == item.word){
                    correctAnswer += 1;
                    isCorrect.textContent = "Poprawna odpowiedź";
                    idWord += 1;
                    

                }
            }
        }

        )
    })
}
