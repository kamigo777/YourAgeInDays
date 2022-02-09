function ageInDays() {
    var birthYear = prompt( 'Ты когда родился выблядок?');
    var ageInDayss = (2022 - birthYear) * 365;
    var h1 = document.createElement('h1');
    var textAnswer = document.createTextNode( 'Ты живешь уже ' + ageInDayss + ' дней на планете Земля');
    h1.setAttribute('id', 'ageInDays');
    h1.appendChild(textAnswer);
    document.getElementById('flex-box-result').appendChild(h1);
}

function reset() {
    document.getElementById('ageInDays').remove();
}