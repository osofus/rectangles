// include submodules
const rectangles = require("./rectangles")

// export validators module
module.exports = {

    routes: function (server) {

        // check for interactions
        server.get("/status", function (req, res) {
            res.send({ areas: [rectangles.r1.area, rectangles.r2.area] })
        })

    }

}