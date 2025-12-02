const {sum} = require ('../src/math');

test('sum correctly', () => {
    expect(sum(1,3)).toBe(4);
});
