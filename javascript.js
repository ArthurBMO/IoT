function mudar()
{
    var ano = 11;
    var oi = "Feliz 20" + ano + "!<br>";
    ano++;
    for (i = 0; i < 10; i++)
    {
        oi = oi + "Feliz 20" + ano + "!<br>";
        ano++;
    }
    document.getElementById("result").innerHTML = oi;
    //nõ sei se da pra mudar de volta pra surpresa
    document.getElementById('botao').innerHTML = 'ñ é mais surpresa';
}

function tOn(x, state)
{
    var image;
    switch (state)
    {
        case 0:
            switch (x)
            {
                case 1:
                    image = document.getElementById('luz1');
                    image.src = "tom2.png";
                    break;
                case 2:
                    image = document.getElementById('luz2');
                    image.src = "tom2.png";
                    break;
                case 3:
                    image = document.getElementById('luz3');
                    image.src = "tom2.png";
                    break;
                case 4:
                    image = document.getElementById('luz4');
                    image.src = "tom2.png";
                    break;
                case 5:
                    image = document.getElementById('luz5');
                    image.src = "tom2.png";
                    break;
                case 6:
                    image = document.getElementById('luz6');
                    image.src = "tom2.png";
                    break;
            }
            break;
        case 1:
            //ele fica permanente mesmo
            document.getElementById('result').innerHTML = "Muhahahahaha, sou o tom"
            switch (x)
            {
                case 1:
                    image = document.getElementById('luz1');
                    image.src = "tom1.png";
                    break;
                case 2:
                    image = document.getElementById('luz2');
                    image.src = "tom1.png";
                    break;
                case 3:
                    image = document.getElementById('luz3');
                    image.src = "tom1.png";
                    break;
                case 4:
                    image = document.getElementById('luz4');
                    image.src = "tom1.png";
                    break;
                case 5:
                    image = document.getElementById('luz5');
                    image.src = "tom1.png";
                    break;
                case 6:
                    image = document.getElementById('luz6');
                    image.src = "tom1.png";
                    break;
            }
            break;
    }
}