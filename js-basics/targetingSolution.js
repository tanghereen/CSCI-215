class TargetingSolution {
    constructor(object) {
        this.xcoord = String(object.x)
        this.ycoord = String(object.y)
        this.zcoord = String(object.z)
    }
    target() {
        return ('('+this.xcoord+', '+this.ycoord+', '+this.zcoord+')')
    }
}

const sln = new TargetingSolution({
    x: 45,
    y: 12,
    z: -1
})

console.log(sln.target())