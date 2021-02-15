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
