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

// Complete the jumpingOnClouds function below.
function jumpingOnClouds(cloudList) {
    const SAFE = 0;
    const DANGER = 1;
    let stepCount = 0;
    // loop through the array
    for (
        let i = 0,
        totalSteps = cloudList.length -1;
        i < totalSteps;
        i++
    ) {
        // edge case
        if (i === totalSteps - 1 && cloudList[i] === SAFE) {
            stepCount++;
            i += 1;
        }
        // special case no 2nd step
        else if (cloudList[i + 1] === SAFE && cloudList[i + 2] === undefined) {
            stepCount++;
        }
        // skip 2 safe clouds
        else if (cloudList[i + 1] === SAFE && cloudList[i + 2] === SAFE) {
            // adjust pointer
            i += 1;
            stepCount++;
        }
        // 1st cloud is dangerous
        else if (cloudList[i + 1] === DANGER && cloudList[i + 2] === SAFE) {
            i += 1;
            stepCount++;
        }
        // 2nd cloud is dangerous
        else if (cloudList[i + 1] === SAFE && cloudList[i + 2] === DANGER) {
            stepCount++;
        }
    }
    return stepCount;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    const c = readLine().split(' ').map(cTemp => parseInt(cTemp, 10));

    let result = jumpingOnClouds(c);

    ws.write(result + "\n");

    ws.end();
}

/**
 * more info: https://www.hackerrank.com/challenges/jumping-on-the-clouds/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=warmup
Sample Input 0

7
0 0 1 0 0 1 0

Sample Output 0

4

 */