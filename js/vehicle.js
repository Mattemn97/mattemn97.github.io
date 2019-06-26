function Vehicle(x, y) {
    this.pos = createVector(random(width), random(height));
    this.target = createVector(x, y);
    this.vel = p5.Vector.random2D();
    this.acc = createVector();
    this.r = 8;
    this.maxspeed = 12.5;
    this.maxforce = 1;
    this.visible = true;
}

Vehicle.prototype.changeTarget = function (tx, ty) {
    this.target = createVector(tx, ty);
};

Vehicle.prototype.behaviors = function () {
    var arrive = this.arrive(this.target);
    var mouse = createVector(mouseX, mouseY);
    var flee = this.flee(mouse);

    arrive.mult(1);
    flee.mult(5);

    this.applyForce(arrive);
    this.applyForce(flee);
};

Vehicle.prototype.applyForce = function (f) {
    this.acc.add(f);
};

Vehicle.prototype.update = function () {
    this.pos.add(this.vel);
    this.vel.add(this.acc);
    this.acc.mult(0);
};

Vehicle.prototype.show = function () {
    if (this.visible) {
        stroke('#2d6286');
        strokeWeight(this.r);
        point(this.pos.x, this.pos.y);
    }
};


Vehicle.prototype.arrive = function (target) {
    var desired = p5.Vector.sub(target, this.pos);
    var d = desired.mag();
    var speed = this.maxspeed;
    if (d < 100) {
        speed = map(d, 0, 100, 0, this.maxspeed);
    }
    desired.setMag(speed);
    var steer = p5.Vector.sub(desired, this.vel);
    steer.limit(this.maxforce);
    return steer;
};

Vehicle.prototype.flee = function (Target) {
    var desired = p5.Vector.sub(Target, this.pos);
    var d = desired.mag();
    if (d < 50) {
        desired.setMag(this.maxspeed);
        desired.mult(-1);
        var steer = p5.Vector.sub(desired, this.vel);
        steer.limit(this.maxforce);
        return steer;
    } else {
        return createVector(0, 0);
    }
};

function gettime() {
    var d = new Date();
    var hou = d.getHours();
    if (hou <= 9)
        hou = '0' + hou;
    var min = d.getMinutes();
    if (min <= 9)
        min = '0' + min;
    var sec = d.getSeconds();
    if (sec <= 9)
        sec = '0' + sec;
    return hou + ':' + min + ':' + sec;
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