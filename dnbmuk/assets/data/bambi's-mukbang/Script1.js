function btools(player) {

    let create = new Tool(namep)
    create.model = modelid
    create.on("activated", p => {
        var rotx = Math.round(p.position.x + 8 * Math.sin(p.rotation.z / debug))
        var roty = Math.round(p.position.y - 8 * Math.cos(p.rotation.z / debug))
        let brick = new Brick(new Vector3(rotx -= Math.round(p.brickSize / 1.5), roty -= Math.round(p.brickSize / 1.5), Math.round(p.position.z + p.brickplacement)), new Vector3(p.brickSize, p.brickSize, p.brickSize), p.brickcolor)
        brick.name = "btools"
        Game.newBrick(brick)
        setTimeout(() => {
            brick.destroy()
        }, pissalivetime)
    }, 500)
    player.addTool(create)

}