class PlotPoint {
    constructor(){
        if (arguments.length === 4) {
            this.x = arguments[0];
            this.y = arguments[1];
            this.z = arguments[2];
            this.clr = color(arguments[3]);
        } else if (arguments.length === 3) {
            this.x = arguments[0];
            this.y = arguments[1];
            this.z = arguments[2];
            this.clr = color("red");
        } else if (arguments.length === 2 && arguments[0] instanceof p5.Vector) { // you can use p5.Vector(x, y, z);
            this.x = arguments[0].x;
            this.y = arguments[0].y;
            this.z = arguments[0].z;
            this.clr = color(arguments[1]);
        } else if (arguments.length === 1 && arguments[0] instanceof p5.Vector) {
            this.x = arguments[0].x;
            this.y = arguments[0].y;
            this.z = arguments[0].z;
        }
    }
}


class Plot3d{
    constructor(canvas, clr="red"){
        if(canvas instanceof p5.Renderer){ // p5.Renderer is canvas
            this.canvas = canvas;
            this.backgroundColor = color(clr);
        }
    }
}

Plot3d.prototype.plotGraphFromArr = function(pointsArray, strokeW = 1, strokeCol = 'red', scale = 1){ // it can be PlotPoint or 3d array
    if(Array.isArray(pointsArray)){
        this.canvas.strokeWeight(strokeW);
        this.canvas.stroke(strokeCol);

        this.canvas.beginShape(POINTS);
        pointsArray.forEach(point => {
            if(point instanceof PlotPoint){
                this.canvas.vertex(point.x, 0, 0);
                this.canvas.vertex(0, point.y, 0);
                this.canvas.vertex(0, 0, point.z);
            } else if(point.length === 3){
                this.canvas.vertex(point[0] * scale, 0, 0);
                this.canvas.vertex(0, point[1] * scale, 0);
                this.canvas.vertex(0, 0, point[2] * scale);
            }
        });

        this.canvas.endShape();
    }
}

Plot3d.prototype.plotSinglePoint = function(pnt, scale = 1, clr='red'){ // (pnt) can be array( with len=3 ), p5plot3d.PlotPoint or p5.Vector
    this.canvas.stroke(color(clr));
    if(pnt instanceof PlotPoint){ 
        // this.canvas.curveVertex(pnt.x * scale, pnt.y * scale, pnt.z * scale); 
        // todo: maybe curveVertex?
        this.canvas.point(pnt.x * scale, pnt.y * scale, pnt.z * scale);
    }
    else if(pnt instanceof p5.Vector){
        this.canvas.point(pnt.x * scale, pnt.y * scale, pnt.z * scale);
    }
    else if(pnt.length === 3){
        this.canvas.point(pnt[0] * scale, pnt[1] * scale, pnt[2] * scale);
    }
}

Plot3d.prototype.showAxis = function(clr='white', size=1000){
    this.canvas.stroke(color(clr));
    cnv.line(0,-size, 0, size); // x-axis
    cnv.line(-size, 0, size,0); // y-axis
    cnv.line(0,0,-size,0,0,size); // z-axis
}

p5.prototype.initPlot3d = function () {
    cam = createCamera();
    return cam;
};

p5.prototype.registerMethod('pre', p5.prototype.orbitControl);
