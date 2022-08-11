// properties of a rectangle
class Rectangle {
    constructor(width, height) {
        this.width = width
        this.height = height
    }
    get area() {
        return this.width * this.height
    }
}

// export rectangles module
module.exports = {

    routes: function (server) {

        // create rectangle 1
        server.post('/r1', function (req, res) {
            let rectangle = new Rectangle(10, 15)
            module.exports.r1 = rectangle
            res.send(rectangle)
        })

        // create rectangle 2
        server.post('/r2', function (req, res) {
            let rectangle = new Rectangle(15, 20)
            module.exports.r2 = rectangle
            res.send(rectangle)
        })

    }
}