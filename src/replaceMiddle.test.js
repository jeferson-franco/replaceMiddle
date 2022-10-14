const solution = require('./replaceMiddle.js');

test('test 1', () => {
    expect(solution([7, 2, 2, 5, 10, 7])).toEqual([7, 2, 7, 10, 7]);
});

test('test 2', () => {
    expect(solution([-5, -5, 10])).toEqual([-5, -5, 10]);
});

test('test 3', () => {
    expect(solution([45, 23, 12, 33, 12, 453, -234, -45])).toEqual([45, 23, 12, 45, 453, -234, -45]);
});

test('test 4', () => {
    expect(solution([2, 8])).toEqual([10]);
});

test('test 5', () => {
    expect(solution([-12, 34, 40, -5, -12, 4, 0, 0, -12])).toEqual([-12, 34, 40, -5, -12, 4, 0, 0, -12]);
});

test('test 6', () => {
    expect(solution([9, 0, 15, 9])).toEqual([9, 15, 9]);
});

test('test 7', () => {
    expect(solution([-6, 6, -6])).toEqual([-6, 6, -6]);
});

test('test 8', () => {
    expect(solution([26, 26, -17])).toEqual([26, 26, -17]);
});

test('test 9', () => {
    expect(solution([-7, 5, 5, 10])).toEqual([-7, 10, 10]);
});
