let plt;
function setup() {
    cnv = createCanvas(windowWidth, windowHeight, WEBGL); // create new Canvas
    plt = new Plot3d(cnv); // create new Plot3d class
}

function draw() {
    background(33);
    noFill();
    stroke(255);
    plt.showAxis("#ff00ff", 1000); // turn on plot axis, with color "#ff00ff" and length 1000
    drawFunc(); // draw function
}


let q = 10; // range
let x_point = -q; // x0 = -q;
let y_point = -q; // y0 = -q;
let z = 0;
let pnt; // PlotPoint
function drawFunc(){
    for(let x = x_point; x <= q; x+=0.5){
        for(let y = y_point; y <= q; y+=0.5){
            z = f(x, y); // z = f(x, y)
            pnt = new PlotPoint(x, y, z); // create new point at (x, y, z)
            plt.plotSinglePoint(pnt, 20); // draw 'pnt' point on canvas, with scale 20
        }
    }
}

function f(x, y){
    return Math.sqrt(Math.pow(x, 2) - Math.pow(y, 2)); 
}