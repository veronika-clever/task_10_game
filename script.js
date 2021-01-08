let minValue = -999;
let maxValue = 999;
let answerNumber = 0;
let orderNumber = 1;
let gameRun = true;

let orderNumberField;
let answerField;
let threeQues;
let differentText;
let differentTextEqual;


document.getElementById('btnStart').addEventListener('click', function () {
    
    orderNumberField = document.getElementById('orderNumberField');
    answerField = document.getElementById('answerField');
    answerField.innerText = 'Задайте интервал между числами ♻';
    btnStart.innerText = 'Заново';
    

        document.getElementById("inputWindowMin").hidden = false;
        document.getElementById("inputWindowMax").hidden = false;
        document.getElementById("btnSend").hidden = false;
        document.getElementById("enterNumbers").hidden = false;
        document.getElementById("enterNumbersTwo").hidden = false;
        inputWindowMin.value = '';
        inputWindowMax.value = '';
        interval.innerText = 'Интервал чисел: ';
        orderNumberField.innerText = ''; 
        
})


document.getElementById('btnSend').addEventListener('click', function () {
    
minValue = parseInt(inputWindowMin.value);
maxValue = parseInt(inputWindowMax.value);
    
    if (isNaN(minValue) || minValue < -999) { minValue = -999 };
    if (isNaN(maxValue) || maxValue > 999) { maxValue = 999 };
    if (isNaN(inputWindowMin.value) || inputWindowMin.value < -999) { inputWindowMin.value = -999 };
    if (isNaN(inputWindowMax.value) || inputWindowMax.value > 999) { inputWindowMax.value = 999 };
        interval.innerText = 'Интервал чисел: ' + 'от ' + inputWindowMin.value + ' до ' + inputWindowMax.value;
        inputWindowMin.value = '';
        inputWindowMax.value = '';

document.getElementById("inputWindowMin").hidden = true;
document.getElementById("inputWindowMax").hidden = true;
document.getElementById("btnSend").hidden = true;
document.getElementById("enterNumbers").hidden = true;
document.getElementById("enterNumbersTwo").hidden = true;

    document.getElementById("btnStart").innerText = 'Начать заново';
    answerField = document.getElementById('answerField'); 
    answerNumber = Math.floor((minValue + maxValue) / 2);
    orderNumber =  1 ;
    gameRun = true;
    orderNumberField = document.getElementById('orderNumberField');
    orderNumberField.innerText = 'Вопрос №1';
    answerField.innerText = `Вы загадали число\n ${(answerNumber)}?`;


})


document.getElementById('btnLess').addEventListener('click', function () {
    if (gameRun) {
        if (maxValue === minValue) {
            const phraseRandom = Math.round(Math.random());
            const answerPhrase = (phraseRandom === 1) ?
                `Вы загадали неправильное число!\n\u{1F914}` :
                `Я сдаюсь..\n\u{1F92F}`;

            answerField.innerText = answerPhrase;
            gameRun = false;
        }
        else {
            maxValue = answerNumber ;
            answerNumber = Math.floor((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.innerText = 'Вопрос № ' + orderNumber;
            threeQues = Math.round(Math.random() * 2);
        switch (threeQues) {
            case 0:
                    differentText = 'Вы загадали число';
                    break;
                case 1:
                    differentText = 'Может быть это число';
                    break;
                case 2:
                    differentText = 'Ваше число';
                    break;
            }
            answerField.innerText = `${differentText} \n ${(answerNumber)}?`;
        }
    }
})


document.getElementById('btnOver').addEventListener('click', function () {
    if (gameRun){
        if (minValue === maxValue){
            const phraseRandom = Math.round( Math.random());
            const answerPhrase = (phraseRandom === 1) ?
                `Вы загадали неправильное число!\n\u{1F914}` :
                `Я сдаюсь..\n\u{1F92F}`;

            answerField.innerText = answerPhrase;
            gameRun = false;
        } else {
            minValue = answerNumber + 1;
            answerNumber = Math.floor((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.innerText = 'Вопрос № ' + orderNumber;
            
            threeQues = Math.round(Math.random() * 2);
        switch (threeQues) {
            case 0:
                differentText = 'Вы загадали число';
                break;
            case 1:
                differentText = 'Может быть это число';
                break;
            case 2:
                differentText = 'Ваше число';
                break;
            }
            answerField.innerText = `${differentText} \n ${(answerNumber)}?`;
        }
    }
})


document.getElementById('btnEqual').addEventListener('click', function () {
    if (gameRun) {
        answerField.innerText = differentTextEqual;
        threeQues = Math.round(Math.random() * 2);
    switch (threeQues) {
        case 0:
            differentTextEqual = `Я всегда угадываю\n\u{1F60E}`;
            break;
        case 2:
            differentTextEqual = `Я это знал\n\u{1F61C}`;
            break;
        case 3:
            differentTextEqual = `Это всё - мой превосходный искусственный интелект\n\u{1F60F}`;
            break;
    }
    answerField.innerText = differentTextEqual;
    btnStart.innerText = 'Начать снова'
    inputWindowMin.value = '';
    inputWindowMax.value = '';
    gameRun = false;
}
})
