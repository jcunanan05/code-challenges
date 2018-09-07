/**
  Measuring a robot
  It’s hard to objectively compare robots by just letting them solve a few scenarios. Maybe one robot just happened to get easier tasks or the kind of tasks that it is good at, whereas the other didn’t.

  Write a function compareRobots that takes two robots (and their starting memory). It should generate 100 tasks and let each of the robots solve each of these tasks. When done, it should output the average number of steps each robot took per task.

  For the sake of fairness, make sure you give each task to both robots, rather than generating different tasks per robot.
 */

function runRobot(state, robot, memory) {
  let turn = 0;
  // loop through the delivery.
  // break the loop after parcel is 0
  for (;; turn++) {
    if (state.parcels.length == 0) {
      // console.log(`Done in ${turn} turns`);
      break;
    }

    let action = robot(state, memory); // returns a {direction: ''}
    state = state.move(action.direction); // VillageState.move
    memory = action.memory; // overwrite the memory 
  }
  
  return turn;
}

function compareRobots(robot1, memory1, robot2, memory2) {
  const robot1Turns = [];
  const robot2Turns = [];
  const tasks = 100;
  
  // run robot and get number of turns
  for(let counter = 0; counter < tasks; counter++) {
    let sameVillageState = VillageState.random();
    
    robot1Turns.push(runRobot(sameVillageState, robot1, memory1));
    robot2Turns.push(runRobot(sameVillageState, robot2, memory2));
  }
  
  return {
  	robot1: robot1Turns.reduce((prevTurn, turn) => turn + prevTurn, 0) / tasks,
    robot2: robot2Turns.reduce((prevTurn, turn) => turn + prevTurn, 0) / tasks
  };
}