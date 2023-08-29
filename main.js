function setup() {
    video = createCapture(VIDEO);
    canvas = createCanvas(640, 480)
    background("firebrick")
    ia = ml5.poseNet(video, mensaje("listo"))
    ia.on("pose", res)
}
var distancia = 0
var nx = 0
var ny = 0
function res(Res) {
    if (Res[0]) {
        izquierda = Res[0].pose.leftWrist.x
        derecha = Res[0].pose.rightWrist.x
        distancia = izquierda - derecha
        nx = Res[0].pose.nose.x
        ny = Res[0].pose.nose.y
    }else{
        mensaje("res 0 no hay")
    }
}
function mensaje(m) {
    console.log(m);
}

function draw() {
    background("firebrick")
    noStroke()
    fill("antiquewhite")
    circle(nx, ny, distancia)
}