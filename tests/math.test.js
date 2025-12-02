const {sum, rest, multi, div} = require ('../src/math');


describe('sum', () => {
    test('should correctly add two positive numbers', () => {
        expect(sum(1, 3)).toBe(4);
    });
    test('should correctly add with a negative number', () => {
        expect(sum(5, -2)).toBe(3);
    });
    test('should correctly add with zero', () => {
        expect(sum(5, 0)).toBe(5);
    });
});

describe('rest', () => {
    test('should correctly subtract two numbers', () => {
        expect(rest(3, 1)).toBe(2);
    });
    test('should return a negative result if the second number is larger', () => {
        expect(rest(1, 3)).toBe(-2);
    });
    test('should correctly subtract a negative number', () => {
        expect(rest(5, -2)).toBe(7);
    });
});

describe('multi', () => {
    test('should correctly multiply two positive numbers', () => {
        expect(multi(2, 3)).toBe(6);
    });
    test('should result in zero when multiplying by zero', () => {
        expect(multi(5, 0)).toBe(0);
    });
    test('should correctly multiply with a negative number', () => {
        expect(multi(5, -2)).toBe(-10);
    });
});

describe('div', () => {
    test('should correctly divide two numbers', () => {
        expect(div(4, 2)).toBe(2);
    });
    test('should throw an error when dividing by zero', () => {
        expect(() => div(5, 0)).toThrow('Cannot divide by zero');
    });
});
