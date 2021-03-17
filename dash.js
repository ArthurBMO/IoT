function tOn(state)
{
    //0 = off; 1 == on
    var image, signal;
    switch (state)
    {
        case 0:
            image = document.getElementById('luz1');
            image.src = "tom2.png";
            signal = 0;
            break;
        case 1:
            image = document.getElementById('luz1');
            image.src = "tom1.png";
            signal = randomInt(200, 1000);
            break;
        break;
    }
    sendToAPI(signal)
}

function sendToAPI(state)
{
    var KEY = 'K4XNFVO8FO2GZXZ7';
    //criar um objeto capaz de enviar dados via requisição HTTP GET
    const http = new XMLHttpRequest();
    //prepara um GET passando a váriavel lux como ultimo paramentro do link
    http.open('GET', 'https://api.thingspeak.com/update?api_key=K4XNFVO8FO2GZXZ7&field1=0'+state);
    //http.open("GET", "https://api.thingspeak.com/update?api_key=" + KEY + "=0" + state);
    //envia um GET
    http.send();
    //quando a requisição retornar ele chama o console e imprime o valor gerado
    http.onload = console.log(http.responseText + " " + state)
}
function randomInt(min, max)
{
    return Math.floor(Math.random() * (max-min +1)) + min;
}