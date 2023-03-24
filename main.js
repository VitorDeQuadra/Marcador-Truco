var nos = Number(document.getElementById("manos").innerHTML);
var eles = Number(document.getElementById("inimigos").innerHTML);
var timer = 1000;

function incrementarNos(quantidade) {
    if (nos + quantidade <= 12) {
        nos += quantidade;
    } else {
        nos = 12;
    }
    document.getElementById("manos").innerHTML = nos;
}

function menosNos() {
    if (nos >= 1) {
        nos--;
        document.getElementById("manos").innerHTML = nos;
    }  
}

function maisUmNos() {
    incrementarNos(1);

    if (eles >= 12 || nos >= 12) { 
        setTimeout(showPopup, 500);
    }
}

function maisTresNos() {
    switch (nos) {
        case 9:
            incrementarNos(3);
            break;
        case 10:
            incrementarNos(2);
            break;
        case 11:
            incrementarNos(1);
            break;
        default:
            incrementarNos(3);
            break;
    }
    
    if (eles >= 12 || nos >= 12) { 
        setTimeout(showPopup, 500);
    }
}

function maisSeisNos() {
    switch (nos) {
        case 7:
            incrementarNos(5);
            break;
        case 8:
            incrementarNos(4);
            break;
        case 9:
            incrementarNos(3);
            break;
        case 10:
            incrementarNos(2);
            break;
        case 11:
            incrementarNos(1);
            break;
        default:
            incrementarNos(6);
            break;
    }

    if (eles >= 12 || nos >= 12) { 
        setTimeout(showPopup, 500);
    }
}

function maisNoveNos() {
    switch (nos) {
        case 4:
            incrementarNos(8);
            break;
        case 5:
            incrementarNos(7);
            break;
        case 6:
            incrementarNos(6);
            break;
        case 7:
            incrementarNos(5);
            break;
        case 8:
            incrementarNos(4);
            break;
        case 9:
            incrementarNos(3);
            break;
        case 10:
            incrementarNos(2);
            break;
        case 11:
            incrementarNos(1);
            break;
        default:
            incrementarNos(9);
            break;
    }

    if (eles >= 12 || nos >= 12) { 
        setTimeout(showPopup, 500);
    }
}

function maisDozeNos() {
    switch (nos) {
        case 1:
            incrementarNos(11);
            break;
        case 2:
            incrementarNos(10);
            break;
        case 3:
            incrementarNos(9);
            break;
        case 4:
            incrementarNos(8);
            break;
        case 5:
            incrementarNos(7);
            break;
        case 6:
            incrementarNos(6);
            break;
        case 7:
            incrementarNos(5);
            break;
        case 8:
            incrementarNos(4);
            break;
        case 9:
            incrementarNos(3);
            break;
        case 10:
            incrementarNos(2);
            break;
        case 11:
            incrementarNos(1);
            break;
        default:
            incrementarNos(12);
            break;
    }

    if (eles >= 12 || nos >= 12) { 
        setTimeout(showPopup, 500);
    }
}



//Pontos deles

function incrementarEles(quantidade) {
    if (eles + quantidade <= 12) {
        eles += quantidade;
    } else {
        eles = 12;
    }
    document.getElementById("inimigos").innerHTML = eles;
}

function menosEles() {
    if (eles >= 1) {
        eles--;
        document.getElementById("inimigos").innerHTML = eles;
    }  
}

function maisUmEles() {
    incrementarEles(1);

    if (eles >= 12 || nos >= 12) { 
        setTimeout(showPopup, 500);
    }
}

function maisTresEles() {
    switch (eles) {
        case 9:
            incrementarEles(3);
            break;
        case 10:
            incrementarEles(2);
            break;
        case 11:
            incrementarEles(1);
            break;
        default:
            incrementarEles(3);
            break;
    }

    if (eles >= 12 || nos >= 12) { 
        setTimeout(showPopup, 500);
    }
}

function maisSeisEles() {
    switch (eles) {
        case 7:
            incrementarEles(5);
            break;
        case 8:
            incrementarEles(4);
            break;
        case 9:
            incrementarEles(3);
            break;
        case 10:
            incrementarEles(2);
            break;
        case 11:
            incrementarEles(1);
            break;
        default:
            incrementarEles(6);
            break;
    }

    if (eles >= 12 || nos >= 12) { 
        setTimeout(showPopup, 500);
    }
}

function maisNoveEles() {
    switch (eles) {
        case 4:
            incrementarEles(8);
            break;
        case 5:
            incrementarEles(7);
            break;
        case 6:
            incrementarEles(6);
            break;
        case 7:
            incrementarEles(5);
            break;
        case 8:
            incrementarEles(4);
            break;
        case 9:
            incrementarEles(3);
            break;
        case 10:
            incrementarEles(2);
            break;
        case 11:
            incrementarEles(1);
            break;
        default:
            incrementarEles(9);
            break;
    }

    if (eles >= 12 || nos >= 12) { 
        setTimeout(showPopup, 500);
    }
}

function maisDozeEles() {
    switch (eles) {
        case 1:
            incrementarEles(11);
            break;
        case 2:
            incrementarEles(10);
            break;
        case 3:
            incrementarEles(9);
            break;
        case 4:
            incrementarEles(8);
            break;
        case 5:
            incrementarEles(7);
            break;
        case 6:
            incrementarEles(6);
            break;
        case 7:
            incrementarEles(5);
            break;
        case 8:
            incrementarEles(4);
            break;
        case 9:
            incrementarEles(3);
            break;
        case 10:
            incrementarEles(2);
            break;
        case 11:
            incrementarEles(1);
            break;
        default:
            incrementarEles(12);
            break;
    }

    if (eles >= 12 || nos >= 12) { 
        setTimeout(showPopup, 500);
    }
}



//zerar pontuação

function zerar() {
    nos = (nos)=0;
    document.getElementById("manos").innerHTML=nos; 

    eles = (eles)=0;
    document.getElementById("inimigos").innerHTML=eles;

}


// definindo vencedor

const popup = document.querySelector('.popup');
const background = document.querySelector('.background');

function showPopup() {
  popup.style.display = 'block';
  background.style.display = 'block';
}

function fechar() {
  popup.style.display = 'none';
  background.style.display = 'none';
}
  























