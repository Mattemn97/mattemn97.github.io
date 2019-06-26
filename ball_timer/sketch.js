var font;
var vehicles = [];

function preload() {
    font = loadFont('DS-DIGI.TTF');
}

function setup() {
    createCanvas(1000, 300);
    background('#265473');
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
    background(50);
    for (var i = 0; i < vehicles.length; i++) {
        var v = vehicles[i];
        v.behaviors();
        v.update();
        v.show();
    }
}

function secondDraw() {
    var time = gettime();
    var points = font.textToPoints(time, 100, 200, 192, {
        sampleFactor: 0.25
    });

    if (points.length <= vehicles.length) {
        for (var k = 0; k < points.length; k++) {
            vehicles[k].visible = true;
            var new_pt1 = createVector(points[k].x, points[k].y);
            vehicles[k].changeTarget(new_pt1.x, new_pt1.y);
        }
        for (var j = points.length; j < vehicles.length; j++) {
            vehicles[j].visible = false;
        }
    } else {
        for (var i = vehicles.length; i < points.length; i++) {
            vehicles.pop();
        }

        for (var i = vehicles.length; i < points.length; i++) {
            var pt = points[i];
            var vehicle = new Vehicle(pt.x, pt.y);
            vehicles.push(vehicle);
        }
    }
    console.log("Cambio di tempo: " + time);
}
