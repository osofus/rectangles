# Rectangles

Node.JS web application to create rectangles and evaluate their relative positions.

## Installation

To install the node modules, run:

```bash
node install
```

## Usage

```bash
# To run tests
npm test

# To run the application
node app.js
```

## Information

For the sake of simplicity it was assumed the base of the rectangles would always be parallel to the X-axis.

Use Postman to create 2 rectangles.

POST http://locahost:3000/r1

POST http://locahost:3000/r2

Request body example:
```bash
{
    "origin": {
        // co-ordinates of the center of the rectangle
        "x": 1,
        "y": 1
    },
    "base": 3,  // length of base
    "height": 2 // height of the rectangle
}
```

Then use the following GET routes:
```bash
# Outputs  the rectangles
GET http://locahost:3000/status
# performs positional analysis of the given rectangles
GET http://locahost:3000/stance
```