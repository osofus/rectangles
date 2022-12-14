// properties of a rectangle
class Rectangle {
    constructor(origin, base, height) {
        // convert to co-ordinates
        this.pointA = {
            x: origin.x - base / 2,
            y: origin.y - height / 2
        }
        this.pointB = {
            x: origin.x + base / 2,
            y: origin.y - height / 2
        }
        this.pointC = {
            x: origin.x + base / 2,
            y: origin.y + height / 2
        }
        this.pointD = {
            x: origin.x - base / 2,
            y: origin.y + height / 2
        }
    }

    contains(rectangle) {
        // encapsulates that rectangle
        if (
            this.pointA.x < rectangle.pointA.x &&
            this.pointB.x > rectangle.pointB.x &&
            this.pointA.y < rectangle.pointA.y &&
            this.pointD.y > rectangle.pointD.y
        ) return true
        else return false
    }

    separateFrom(rectangle) {
        // not touching that rectangle in any manner
        if (
            this.pointA.x > rectangle.pointB.x ||
            rectangle.pointA.x > this.pointB.x ||
            this.pointA.y > rectangle.pointD.y ||
            rectangle.pointA.y > this.pointD.y
        ) return true
        else return false
    }

    adjacentTo(rectangle) {
        if (this.pointA.x == rectangle.pointB.x || rectangle.pointA.x == this.pointB.x) {
            // vertical sides are touching
            if (this.pointA.y == rectangle.pointA.y && this.pointD.y == rectangle.pointD.y) {
                return "proper"
            } else if (
                this.pointA.y <= rectangle.pointA.y && this.pointD.y >= rectangle.pointD.y ||
                rectangle.pointA.y <= this.pointA.y && rectangle.pointD.y >= this.pointD.y
            ) {
                return "sub-line"
            } else if (
                rectangle.pointA.y < this.pointA.y && this.pointA.y < rectangle.pointD.y ||
                this.pointA.y < rectangle.pointA.y && rectangle.pointA.y < this.pointD.y
            ) {
                return "partial"
            } else return ""
        } else if (this.pointA.y == rectangle.pointD.y || rectangle.pointA.y == this.pointD.y) {
            // horizontal sides are touching
            if (this.pointA.x == rectangle.pointA.x && this.pointB.x == rectangle.pointB.x) {
                return "proper"
            } else if (
                this.pointA.x <= rectangle.pointA.x && this.pointB.x >= rectangle.pointB.x ||
                rectangle.pointA.x <= this.pointA.x && rectangle.pointB.x >= this.pointB.x
            ) {
                return "sub-line"
            } else if (
                rectangle.pointA.x < this.pointA.x && this.pointA.x < rectangle.pointB.x ||
                this.pointA.x < rectangle.pointA.x && rectangle.pointA.x < this.pointB.x
            ) {
                return "partial"
            } else return ""
        } else return ""
    }
}

function createR1(origin, base, height) {
    // to export the creation of rectangle 1
    let rectangle = new Rectangle(origin, base, height)
    module.exports.r1 = rectangle
    return rectangle
}

function createR2(origin, base, height) {
    // to export the creation of rectangle 2
    let rectangle = new Rectangle(origin, base, height)
    module.exports.r2 = rectangle
    return rectangle
}

// export rectangles module
module.exports = {

    routes: function (server) {

        // create rectangle 1
        server.post('/r1', function (req, res) {
            res.send(createR1(req.body.origin, req.body.base, req.body.height))
        })

        // create rectangle 2
        server.post('/r2', function (req, res) {
            res.send(createR2(req.body.origin, req.body.base, req.body.height))
        })

    },

    rectangle1: createR1,
    rectangle2: createR2
}