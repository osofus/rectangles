// include submodules
const rectangles = require("./rectangles")

function determine() {
    let outcome = ''
    if (rectangles.r1 == undefined || rectangles.r2 == undefined) {
        outcome = "Please define both rectangles first"
    } else if (rectangles.r1.separateFrom(rectangles.r2))
        outcome = "Rectangles are separate from each other"
    else if (rectangles.r1.contains(rectangles.r2)) {
        outcome = "r1 contains r2"
    } else if (rectangles.r2.contains(rectangles.r1)) {
        outcome = "r2 contains r1"
    } else if (rectangles.r1.adjacentTo(rectangles.r2).length > 0) {
        outcome = "Rectangles are adjacent (" + rectangles.r1.adjacentTo(rectangles.r2) + ")"
    } else {
        outcome = "Rectangles are intersecting"
    }
    return outcome
}

// export validators module
module.exports = {

    routes: function (server) {

        // output rectangles
        server.get("/status", function (req, res) {
            res.send({ inputs: [rectangles.r1, rectangles.r2] })
        })

        // positional analysis
        server.get("/stance", function (req, res) {
            res.send({ report: determine() })
        })

    },

    outcome: determine

}