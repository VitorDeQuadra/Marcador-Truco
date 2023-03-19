var nos = Number(document.getElementById("manos").innerHTML);
var eles = Number(document.getElementById("inimigos").innerHTML);
var timer = 1000;

function menosNos() {
    if (nos >= 1) {
        nos = (nos)-1;
        document.getElementById("manos").innerHTML=nos;
    }  
}

function maisUmNos() {
    if (nos <= 11) {
        nos = (nos)+1;
        document.getElementById("manos").innerHTML=nos;
    }
}

function maisTresNos() {
    if (nos == 9) {
        nos = (nos)+3;
        document.getElementById("manos").innerHTML=nos;
    }else
    if (nos == 10) {
        nos = (nos)+2;
        document.getElementById("manos").innerHTML=nos;
    }else
    if (nos == 11) {
        nos = (nos)+1;
        document.getElementById("manos").innerHTML=nos;
    }else
    if (nos <= 11) {
        nos = (nos)+3;
        document.getElementById("manos").innerHTML=nos;
    }
}

function maisSeisNos() {
    if (nos == 7) {
        nos = (nos)+5;
        document.getElementById("manos").innerHTML=nos;
    }else
    if (nos == 8) {
        nos = (nos)+4;
        document.getElementById("manos").innerHTML=nos;
    }else
    if (nos == 9) {
        nos = (nos)+3;
        document.getElementById("manos").innerHTML=nos;
    }else
    if (nos == 10) {
        nos = (nos)+2;
        document.getElementById("manos").innerHTML=nos;
    }else
    if (nos == 11) {
        nos = (nos)+1;
        document.getElementById("manos").innerHTML=nos;
    }else
    if (nos <= 11) {
        nos = (nos)+6;
        document.getElementById("manos").innerHTML=nos;
    }
}

function maisNoveNos() {
    if (nos == 4) {
        nos = (nos)+8;
        document.getElementById("manos").innerHTML=nos;
    }else
    if (nos == 5) {
        nos = (nos)+7;
        document.getElementById("manos").innerHTML=nos;
    }else
    if (nos == 6) {
        nos = (nos)+6;
        document.getElementById("manos").innerHTML=nos;
    }else
    if (nos == 7) {
        nos = (nos)+5;
        document.getElementById("manos").innerHTML=nos;
    }else
    if (nos == 8) {
        nos = (nos)+4;
        document.getElementById("manos").innerHTML=nos;
    }else
    if (nos == 9) {
        nos = (nos)+3;
        document.getElementById("manos").innerHTML=nos;
    }else
    if (nos == 10) {
        nos = (nos)+2;
        document.getElementById("manos").innerHTML=nos;
    }else
    if (nos == 11) {
        nos = (nos)+1;
        document.getElementById("manos").innerHTML=nos;
    }else
    if (nos <= 11) {
        nos = (nos)+9;
        document.getElementById("manos").innerHTML=nos;
    }
}

function maisDozeNos() {
    if (nos == 1) {
        nos = (nos)+11;
        document.getElementById("manos").innerHTML=nos;
    }else
    if (nos == 2) {
        nos = (nos)+10;
        document.getElementById("manos").innerHTML=nos;
    }else
    if (nos == 3) {
        nos = (nos)+9;
        document.getElementById("manos").innerHTML=nos;
    }else
    if (nos == 4) {
        nos = (nos)+8;
        document.getElementById("manos").innerHTML=nos;
    }else
    if (nos == 5) {
        nos = (nos)+7;
        document.getElementById("manos").innerHTML=nos;
    }else
    if (nos == 6) {
        nos = (nos)+6;
        document.getElementById("manos").innerHTML=nos;
    }else
    if (nos == 7) {
        nos = (nos)+5;
        document.getElementById("manos").innerHTML=nos;
    }else
    if (nos == 8) {
        nos = (nos)+4;
        document.getElementById("manos").innerHTML=nos;
    }else
    if (nos == 9) {
        nos = (nos)+3;
        document.getElementById("manos").innerHTML=nos;
    }else
    if (nos == 10) {
        nos = (nos)+2;
        document.getElementById("manos").innerHTML=nos;
    }else
    if (nos == 11) {
        nos = (nos)+1;
        document.getElementById("manos").innerHTML=nos;
    }else
    if (nos <= 11) {
        nos = (nos)+12;
        document.getElementById("manos").innerHTML=nos;
    }
}



//Pontos deles

function menosEles() {
    if (eles >= 1) {
        eles = (eles)-1;
        document.getElementById("inimigos").innerHTML=eles;
    }  
}

function maisUmEles() {
    if (eles <= 11) {
        eles = (eles)+1;
        document.getElementById("inimigos").innerHTML=eles;
    }
}

function maisTresEles() {
    if (eles == 9) {
        eles = (eles)+3;
        document.getElementById("inimigos").innerHTML=eles;
    }else
    if (eles == 10) {
        eles = (eles)+2;
        document.getElementById("inimigos").innerHTML=eles;
    }else
    if (eles == 11) {
        eles = (eles)+1;
        document.getElementById("inimigos").innerHTML=eles;
    }else
    if (eles <= 11) {
        eles = (eles)+3;
        document.getElementById("inimigos").innerHTML=eles;
    }
}

function maisSeisEles() {
    if (eles == 7) {
        eles = (eles)+5;
        document.getElementById("inimigos").innerHTML=eles;
    }else
    if (eles == 8) {
        eles = (eles)+4;
        document.getElementById("inimigos").innerHTML=eles;
    }else
    if (eles == 9) {
        eles = (eles)+3;
        document.getElementById("inimigos").innerHTML=eles;
    }else
    if (eles == 10) {
        eles = (eles)+2;
        document.getElementById("inimigos").innerHTML=eles;
    }else
    if (eles == 11) {
        eles = (eles)+1;
        document.getElementById("inimigos").innerHTML=eles;
    }else
    if (eles <= 11) {
        eles = (eles)+6;
        document.getElementById("inimigos").innerHTML=eles;
    }
}

function maisNoveEles() {
    if (eles == 4) {
        eles = (eles)+8;
        document.getElementById("inimigos").innerHTML=eles;
    }else
    if (eles == 5) {
        eles = (eles)+7;
        document.getElementById("inimigos").innerHTML=eles;
    }else
    if (eles == 6) {
        eles = (eles)+6;
        document.getElementById("inimigos").innerHTML=eles;
    }else
    if (eles == 7) {
        eles = (eles)+5;
        document.getElementById("inimigos").innerHTML=eles;
    }else
    if (eles == 8) {
        eles = (eles)+4;
        document.getElementById("inimigos").innerHTML=eles;
    }else
    if (eles == 9) {
        eles = (eles)+3;
        document.getElementById("inimigos").innerHTML=eles;
    }else
    if (eles == 10) {
        eles = (eles)+2;
        document.getElementById("inimigos").innerHTML=eles;
    }else
    if (eles == 11) {
        eles = (eles)+1;
        document.getElementById("inimigos").innerHTML=eles;
    }else
    if (eles <= 11) {
        eles = (eles)+9;
        document.getElementById("inimigos").innerHTML=eles;
    }
}

function maisDozeEles() {
    if (eles == 1) {
        eles = (eles)+11;
        document.getElementById("inimigos").innerHTML=eles;
    }else
    if (eles == 2) {
        eles = (eles)+10;
        document.getElementById("inimigos").innerHTML=eles;
    }else
    if (eles == 3) {
        eles = (eles)+9;
        document.getElementById("inimigos").innerHTML=eles;
    }else
    if (eles == 4) {
        eles = (eles)+8;
        document.getElementById("inimigos").innerHTML=eles;
    }else
    if (eles == 5) {
        eles = (eles)+7;
        document.getElementById("inimigos").innerHTML=eles;
    }else
    if (eles == 6) {
        eles = (eles)+6;
        document.getElementById("inimigos").innerHTML=eles;
    }else
    if (eles == 7) {
        eles = (eles)+5;
        document.getElementById("inimigos").innerHTML=eles;
    }else
    if (eles == 8) {
        eles = (eles)+4;
        document.getElementById("inimigos").innerHTML=eles;
    }else
    if (eles == 9) {
        eles = (eles)+3;
        document.getElementById("inimigos").innerHTML=eles;
    }else
    if (eles == 10) {
        eles = (eles)+2;
        document.getElementById("inimigos").innerHTML=eles;
    }else
    if (eles == 11) {
        eles = (eles)+1;
        document.getElementById("inimigos").innerHTML=eles;
    }else
    if (eles <= 11) {
        eles = (eles)+12;
        document.getElementById("inimigos").innerHTML=eles;
    }
}

function zerar() {
    nos = (nos)=0;
    document.getElementById("manos").innerHTML=nos; 

    eles = (eles)=0;
    document.getElementById("inimigos").innerHTML=eles;

}












