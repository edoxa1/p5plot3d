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
