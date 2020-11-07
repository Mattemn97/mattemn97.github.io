var vehicles = [];
var images = [];
var imgData;

let img;
function preload() {
  img = loadImage('images/Profilo.jpg');
  imgData = ctx.getImageData(x, y, width, height).data;
}

function setup() {
    createCanvas(1000, 300);
    background('#265473');
    image(img, 10, 10, 50, 50);
}

function draw() {
    var points 
    for (var i = 0; i < points.length; i++) {
        var pt = points[i];
        var vehicle = new Vehicle(pt.x, pt.y);
        vehicles.push(vehicle);
    }
    prima = false;
    console.log("Prima");
    console.log("Lunghezza vehicles:" + vehicles.length);
    background('#265473');
    for (var i = 0; i < vehicles.length; i++) {
        var v = vehicles[i];
        v.behaviors();
        v.update();
        v.show();
    }
}
