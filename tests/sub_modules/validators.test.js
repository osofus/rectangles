const rectangles = require('../../sub_modules/rectangles')
const validators = require('../../sub_modules/validators')

test('cannot determine stance before defining rectangles', () => {
    expect(validators.outcome()).toBe('Please define both rectangles first');
})

test('rectangle1 is above rectangle2 and partially adjacent', () => {
    rectangles.rectangle1({x: 1, y: 1}, 3, 2)
    rectangles.rectangle2({x: -1, y: -1}, 3, 2)
    expect(validators.outcome()).toBe('Rectangles are adjacent (partial)');
})