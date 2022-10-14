function solution(arr) {
    if (arr.length % 2 === 0) {
        const middle = arr.length / 2;
        const sum = arr[middle - 1] + arr[middle];
        arr.splice(middle - 1, 2, sum);
    }
    return arr;
}

module.exports = solution;

// npm init -y
// npm i jest-cli -g
// package.json: "scripts": { "test": "jest" }
// npm test replaceMiddle

// alternative solution
