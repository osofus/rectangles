const rectangles = require('../../sub_modules/rectangles')
const validators = require('../../sub_modules/validators')

test('cannot determine stance before defining rectangles', () => {
    expect(validators.outcome()).toBe('Please define both rectangles first');
})

test('rectangle1 is above rectangle2 and partially adjacent', () => {
    rectangles.rectangle1({ x: 1, y: 1 }, 3, 2)
    rectangles.rectangle2({ x: -1, y: -1 }, 3, 2)
    expect(validators.outcome()).toBe('Rectangles are adjacent (partial)');
})

test('rectangles are intersecting horizontally', () => {
    rectangles.rectangle1({ x: 1, y: 1 }, 2, 3)
    rectangles.rectangle2({ x: 2, y: 1 }, 3, 2)
    expect(validators.outcome()).toBe('Rectangles are intersecting');
})

test('rectangles are intersecting horizontally and vertically', () => {
    rectangles.rectangle1({ x: 1, y: 1 }, 2, 3)
    rectangles.rectangle2({ x: 2, y: 1 }, 3, 4)
    expect(validators.outcome()).toBe('Rectangles are intersecting');
})

test('rectangles are intersecting horizontally and touching the other vertical side', () => {
    rectangles.rectangle1({ x: 1, y: 1 }, 2, 3)
    rectangles.rectangle2({ x: 2, y: 1 }, 4, 2)
    expect(validators.outcome()).toBe('Rectangles are intersecting');
})

test("r1 contains r2", () => {
    rectangles.rectangle1({ x: 1, y: 1 }, 10, 10)
    rectangles.rectangle2({ x: 1, y: 1 }, 5, 5)
    expect(validators.outcome()).toBe("r1 contains r2");
})

test("rectangles have sub-line adjacency", () => {
    rectangles.rectangle1({ x: 1, y: 1 }, 2, 4)
    rectangles.rectangle2({ x: 3, y: 1 }, 2, 2)
    expect(validators.outcome()).toBe("Rectangles are adjacent (sub-line)");
})

test("rectangles have proper adjacency", () => {
    rectangles.rectangle1({ x: 1, y: 1 }, 2, 2)
    rectangles.rectangle2({ x: 3, y: 1 }, 2, 2)
    expect(validators.outcome()).toBe("Rectangles are adjacent (proper)");
})

test('rectangles are intersecting with corners touching', () => {
    rectangles.rectangle1({ x: 1, y: 1 }, 2, 3)
    rectangles.rectangle2({ x: 3, y: -2 }, 2, 3)
    expect(validators.outcome()).toBe('Rectangles are intersecting');
})

test('rectangles are the same size', () => {
    rectangles.rectangle1({ x: 1, y: 1 }, 2, 3)
    rectangles.rectangle2({ x: 1, y: 1 }, 2, 3)
    expect(validators.outcome()).toBe('Rectangles are intersecting');
})

test('rectangle1 nearly containes rectangle2', () => {
    rectangles.rectangle1({ x: 1, y: 1 }, 8, 8)
    rectangles.rectangle2({ x: 4, y: 1 }, 2, 2)
    expect(validators.outcome()).toBe('Rectangles are intersecting');
})