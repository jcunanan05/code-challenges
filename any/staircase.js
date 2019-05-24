function staircase(stairSteps) {
  function fibonnaci(n) {
    if(n <= 1) return 1;
    else {
      return fibonnaci(n - 1) + fibonnaci(n - 2);
    }
  }
  return fibonnaci(stairSteps);
}

/**
 * 
 * @param {Number} stairSteps 
 * @param {Number[]} stepList 
 */
function variableStepsStaircase(stairSteps, stepList) {
  function countSteps(step) {
    if (step > stairSteps) return 0;
    if (step === stairSteps) return 1;
    if (step <= 1) return 1;
    return countSteps(stairSteps - step)
  }

  return stepList.reduce((accumulator, currentValue) => accumulator + countSteps(currentValue))
}

exports.variableStepsStaircase = variableStepsStaircase;
module.exports = staircase
