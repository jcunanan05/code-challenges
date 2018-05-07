//compare alice vs bob's numbers and score them
function solve(a0, a1, a2, b0, b1, b2) {
  var alice = Array.from(arguments).splice(0,3);
  var bob = Array.from(arguments).splice(3,5);
  var aliceScore = 0;
  var bobScore = 0;

  alice.forEach((a, i) => {
    if(a > bob[i]) aliceScore += 1;
    else if(a < bob[i]) bobScore += 1;
  });

  return [aliceScore, bobScore];
}

console.log(solve(5, 6, 7, 3, 6, 10));