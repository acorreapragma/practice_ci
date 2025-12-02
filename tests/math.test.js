const {sum} = require ('../src/math');

test('sum correctly', () => {
    expect(sum(1,2)).toBe(4);
});
