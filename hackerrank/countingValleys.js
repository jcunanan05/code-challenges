'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the countingValleys function below.
function countingValleys(totalSteps, stepList) {
    let valleysCrossed = 0;
    let landLevel = 0;
    for (
        let i = 0,
        stepLength = totalSteps - 1,
        previousLandLevel = 0;
        i <= stepLength;
        i += 1
    ) {
        // update land level
        if (stepList[i] === 'U') landLevel += 1;
        else if (stepList[i] === 'D') landLevel -= 1;
        // update valleysCrossed
        if (previousLandLevel === -1 && landLevel === 0) valleysCrossed += 1;
        // cache previousLandLevel
        previousLandLevel = landLevel;
    }
    return valleysCrossed;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    const s = readLine();

    let result = countingValleys(n, s);

    ws.write(result + "\n");

    ws.end();
}

/**
 * 
 * more details: https://www.hackerrank.com/challenges/counting-valleys/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=warmup
 * 
Sample Input

8
UDDDUDUU

Sample Output

1

 */