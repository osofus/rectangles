// properties of a rectangle
class Rectangle {
    constructor(origin, base, height) {
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
        if (
            this.pointA.x < rectangle.pointA.x &&
            this.pointB.x > rectangle.pointB.x &&
            this.pointA.y < rectangle.pointA.y &&
            this.pointD.y > rectangle.pointD.y
        ) return true
        else return false
    }

    separateFrom(rectangle) {
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
                rectangle.pointA.y < this.pointA.y < rectangle.pointD.y ||
                this.pointA.y < rectangle.pointA.y < this.pointD.y
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
                rectangle.pointA.x < this.pointA.x < rectangle.pointB.x ||
                this.pointA.x < rectangle.pointA.x < this.pointB.x
            ) {
                return "partial"
            } else return ""
        } else return ""
    }
}

// export rectangles module
module.exports = {

    routes: function (server) {

        // create rectangle 1
        server.post('/r1', function (req, res) {
            let rectangle = new Rectangle(req.body.origin, req.body.base, req.body.height)
            module.exports.r1 = rectangle
            res.send(rectangle)
        })

        // create rectangle 2
        server.post('/r2', function (req, res) {
            let rectangle = new Rectangle(req.body.origin, req.body.base, req.body.height)
            module.exports.r2 = rectangle
            res.send(rectangle)
        })

    }
}