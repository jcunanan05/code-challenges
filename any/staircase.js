function staircase(stairSteps) {
  return fibonnaci(stairSteps);
}

function fibonnaci(n) {
  if(n <= 1) return 1;
  else {
    return fibonnaci(n - 1) + fibonnaci(n - 2);
  }
}

module.exports = staircase