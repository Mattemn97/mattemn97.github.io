var vehicles = [];
var images = [];
var imgData;
var colPixel = [];
var listPixel = [];

var prima = true;

onload = init;

function init() {
    cv = document.querySelector("#cv");
    c = cv.getContext("2d");
    
    pre = document.querySelector("pre")

    img1 = new Image();
    img1.crossOrigin = "Anonymous";
    
    img1.onload = function() {
        c.drawImage(img1, 0,0,64,64);
        var idata = c.getImageData(0, 0, 64, 64);
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
    createCanvas(700, 700);
    background('#FFFFFF');
    
}

function draw() {
    for (var i = 0; i < listPixel.length; i++) {
        var x;
        var y;
        x = (i % 64) * 10;
        y = Math.floor(i/64) * 10;
        var vehicle = new Vehicle(x, y);
        vehicles.push(vehicle);
    }
    background('#FFFFFF');
    
    for (var i = 0; i < listPixel.length; i++) {
        var v = vehicles[i];
        v.behaviors();
        v.update();
        v.show(listPixel[i][0], listPixel[i][1], listPixel[i][2]);
    }
}
