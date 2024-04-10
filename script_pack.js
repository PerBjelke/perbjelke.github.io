let canvas = document.querySelector('canvas')
let ctx = canvas.getContext('2d')

canvas.width = innerWidth
canvas.height = innerHeight

//Class kartet, er en mal for objekter 
class Boundary {
    static width = 40;
    static height = 40;
    //Constructor
    constructor({ position }){
        this.position = position
        this.width =  40
        this.height = 40
    }

    draw() { 
    //tegner et kvadrat
    ctx.fillStyle = 'blue'
    ctx.fillRect(this.position.x, this.position.y, this.width, this.height)

    }
}







let map = [
    ["-","-","-","-","-","-","-","-","-","-",],
    ["-"," "," "," "," "," "," "," "," ","-",],
    ["-"," "," "," "," "," "," "," "," ","-",],
    ["-","-","-","-","-","-","-","-","-","-",]
] 


for (let i = 0; i < map.length; i++ ){
    for (let j = 0; j < map[i].length; j++){
        if(map[i][j] == "-"){
            let boundary = new Boundary({
                position: {
                    x: 40 * j,
                    y: 40 * i
                }
            })
            boundary.draw()
        } 
    }
}


class Player{
    constructor({position, velocity}){
        this.position = position
        this.velocity = velocity
        this.radius = 15
    }

    drawPlayer() {
        ctx.beginPath()
        ctx.arc(this.position.x, this.position.y, this.radius, 0, Math.PI*2)
        ctx.fillStyle = 'yellow'
        ctx.fill()
        ctx.closePath
    }

    update(){
        drawPlayer()
        this.position.x = 60 
        this.position.y = 60 
    }

}





let player = new Player ({
    position: {
        x: Boundary.width * 1.5,
        y: Boundary.height * 1.5

    }, 
    velocity: {
        x: 0,
        y: 0
    }
})
