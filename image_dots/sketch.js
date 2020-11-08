var vehicles = [];
var images = [];
var imgData;
var colPixel = [];
var listPixel = [];
var lar = 64;
var alt = 64;

onload = init;

function init() {
    cv = document.querySelector("#cv");
    c = cv.getContext("2d");
    
    pre = document.querySelector("pre")

    img1 = new Image();
    img1.crossOrigin = "Anonymous";
    
    img1.onload = function() {
        c.drawImage(img1, 0,0,lar,alt);
        var idata = c.getImageData(0, 0, lar, alt);
        getPixels(idata);
    };
    
    img1.src = 'https://mattemn97.github.io/images/Profilo.jpg';
    
}   

function getPixels(imgData) {
    for (var k = 0; k < imgData.data.length; k += 4) {
        colPixel = [imgData.data[k], imgData.data[k+1], imgData.data[k+2]]
        listPixel.push(colPixel);
    }   
}

function setup() {
    createCanvas(alt * 10, lar * 10);
    background('#265473');
    
}

function draw() {
    for (var i = 0; i < listPixel.length; i++) {
        var x;
        var y;
        x = (i % alt) * 10;
        y = Math.floor(i/lar) * 10;
        var vehicle = new Vehicle(x, y);
        vehicles.push(vehicle);
        console.log("Lunghezza vehicles SETUP:" + vehicles.length);
    }

    for (var i = 0; i < (alt * lar); i++) {
        console.log("Lunghezza vehicles DRAW:" + i);
        var v = vehicles[i];
        v.behaviors();
        v.update();
        var red = listPixel[i][0];
        var green = listPixel[i][1];
        var blue = listPixel[i][2];
        v.show(red, green, blue);
    }
}
