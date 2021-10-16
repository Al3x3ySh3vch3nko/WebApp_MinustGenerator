"use strict";

// Основной код
// Получение количества всех span в html
let numbersOfName = (document.querySelectorAll('.name')).length
let numbersOfName2 = (document.querySelectorAll('.name2')).length
let numbersOfDate = (document.querySelectorAll('.date')).length
let numbersOfNumber = (document.querySelectorAll('.number')).length
let numbersOfNumberRTN = (document.querySelectorAll('.numberRTN')).length
let numbersOfAuthorityRTN = (document.querySelectorAll('.spanAuthorityRTN')).length
let numbersOfDateRegulation = (document.querySelectorAll('.dateRegulation')).length
let numbersOfLetterMER = (document.querySelectorAll('.letterMER')).length

// Создание массива span
const spanName = Array.from(document.querySelectorAll('.name'))
const spanName2 = Array.from(document.querySelectorAll('.name2'))
const spanDate = Array.from(document.querySelectorAll('.date'))
const spanNumber = Array.from(document.querySelectorAll('.number'))
const spanNumberRTN = Array.from(document.querySelectorAll('.numberRTN'))
const spanAuthorityRTN = Array.from(document.querySelectorAll('.spanAuthorityRTN'))
const spanDateRegulation = Array.from(document.querySelectorAll('.dateRegulation'))
const spanLetterMER = Array.from(document.querySelectorAll('.letterMER'))

// Слушатель событий
document.querySelector('.generate').addEventListener('click', setText)

function setText(event)
{
// сброс перезагрузки формы
event.preventDefault()

// Получение значениий всех полей ввода
let documentName = document.querySelector('.js-form-area-1').value
let documentName2 = document.querySelector('.js-form-area-2').value
let documentDate = document.querySelector('.js-form-area-3').value
let documentNumber = document.querySelector('.js-form-area-4').value
let documentNumberRTN = document.querySelector('.js-form-area-5').value
let documentAuthorityRTN = document.querySelector('.js-form-area-6').value
let documentDateRegulation = document.querySelector('.js-form-area-7').value
let documentLetterMER = document.querySelector('.js-form-area-8').value

for (let i = 0; i < numbersOfName; i++)
    {
    spanName[i].textContent = documentName
    }

for (let i = 0; i < numbersOfName2; i++)
    {
    spanName2[i].textContent = documentName2
    }

for (let i = 0; i < numbersOfDate; i++)
    {
    spanDate[i].textContent = documentDate
    }

for (let i = 0; i < numbersOfNumber; i++)
    {
    spanNumber[i].textContent = documentNumber
    }

for (let i = 0; i < numbersOfNumberRTN; i++)
    {
    spanNumberRTN[i].textContent = documentNumberRTN
    }

for (let i = 0; i < numbersOfAuthorityRTN; i++)
    {
    spanAuthorityRTN[i].textContent = documentAuthorityRTN
    }

for (let i = 0; i < numbersOfDateRegulation; i++)
    {
    spanDateRegulation[i].textContent = documentDateRegulation
    }

for (let i = 0; i < numbersOfLetterMER; i++)
    {
    spanLetterMER[i].textContent = documentLetterMER
    }
}
