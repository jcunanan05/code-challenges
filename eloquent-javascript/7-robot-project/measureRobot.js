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
      console.log(`Done in ${turn} turns`);
      break;
    }

    let action = robot(state, memory); // returns a {direction: ''}
    state = state.move(action.direction); // VillageState.move
    memory = action.memory; // overwrite the memory 
  }
  
  return turn;
}

function compareRobots(robot1, memory1, robot2, memory2) {
  const sameVillageState = VillageState.random(100);
  
  // run robot and get number of turns
  const robot1Turns = runRobot(sameVillageState, robot1, memory1);
  const robot2Turns = runRobot(sameVillageState, robot2, memory2);
  
  return {
  	robot1: robot1Turns,
    robot2: robot2Turns
  };
}

compareRobots(routeRobot, [], goalOrientedRobot, []);