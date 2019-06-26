var font;
var vehicles = [];
var c;
var ctx;

function preload() {
    font = loadFont('DS-DIGI.TTF');
}

function setup() {
    c = document.getElementById("myCanvas");
    ctx = c.getContext("2d");
    ctx.background(50);
    setInterval(secondDraw, 1000);
    prima = true;
}

function draw() {
    if (prima) {
        var time = gettime();
        var points = font.textToPoints(time, 100, 200, 192, {
            sampleFactor: 0.25
        });
        for (var i = 0; i < points.length; i++) {
            var pt = points[i];
            var vehicle = new Vehicle(pt.x, pt.y);
            vehicles.push(vehicle);
        }
        prima = false;
        console.log("Prima");
        console.log("Lunghezza vehicles:" + vehicles.length);
    }
    ctx.background(50);
    for (var i = 0; i < vehicles.length; i++) {
        var v = vehicles[i];
        v.behaviors();
        v.update();
        v.show();
    }
}


