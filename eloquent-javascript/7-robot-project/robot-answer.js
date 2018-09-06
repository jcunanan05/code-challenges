const roads = [
  "Alice's House-Bob's House",   "Alice's House-Cabin",
  "Alice's House-Post Office",   "Bob's House-Town Hall",
  "Daria's House-Ernie's House", "Daria's House-Town Hall",
  "Ernie's House-Grete's House", "Grete's House-Farm",
  "Grete's House-Shop",          "Marketplace-Farm",
  "Marketplace-Post Office",     "Marketplace-Shop",
  "Marketplace-Town Hall",       "Shop-Town Hall"
];
const roadGraph = buildGraph(roads);
// this is the map on how to go to each house
const mailRoute = [
  "Alice's House", "Cabin", "Alice's House", "Bob's House",
  "Town Hall", "Daria's House", "Ernie's House",
  "Grete's House", "Shop", "Grete's House", "Farm",
  "Marketplace", "Post Office"
];
// Build graph is a function that we convert the roads to a graph, to determine in a given place, which places we can visit from there
function buildGraph(edges) {
  let graph = Object.create(null); // to prevent fallback e.g. graph.hasOwnProperty('toString') might return true.

  // addEdge builds the graph object like this,
  /*
    { 'currentPlace': ['places', 'you', 'can', 'go'] }
  */

  // simple check if a property exists, if not, add them, and if found, push them to the array
  function addEdge(from, to) {
    if (graph[from] == null) {
      graph[from] = [to];
    } else {
      graph[from].push(to);
    }
  }
  
  // split the road array by their hyphen, that will become one array with 2 elements [['one', 'two'], [one, 'three']]

  // and loop them, destructure them also and build the graph object
  for (let [from, to] of edges.map(r => r.split("-"))) {
    addEdge(from, to);
    addEdge(to, from);
  }
  
  return graph;
}

// parcels looks like this:
// [{place: 'Alice \'s house', address: 'Post Office'}, {...}]
// place is where the robot previously moved or picked a parcel. while address is where will it needs to be delivered.
class VillageState {
  constructor(place, parcels) {
    this.place = place;
    this.parcels = parcels;
  }

  move(destination) {
    // get the destination e.g. 'Town Hall'
    // check roadGraph if that destination can be reached by the current Village State's place.
    if (!roadGraph[this.place].includes(destination)) {
      // just return current state if it's invalid.
      return this;
    } else {
      // loop over the parcels.
      // rewrite their current place as the destination.
      // except the one with the same place as the VillageState
      
      // as soon as moving (rewriting place: ), filter the packages
      // remove the packages with place == address
      let parcels = this.parcels.map(p => {
        if (p.place != this.place) return p;

        return {place: destination, address: p.address};
      }).filter(p => p.place != p.address);

      // return new village state
      return new VillageState(destination, parcels);
    }
  }
}

// state is the village state,
// robot is the delivery boy. (has its own route delivery functions)
// memory is optional parameter (depends on the robot.)
function runRobot(state, robot, memory) {
  // loop through the delivery.
  // break the loop after parcel is 0
  for (let turn = 0;; turn++) {
    if (state.parcels.length == 0) {
      console.log(`Done in ${turn} turns`);
      break;
    }

    let action = robot(state, memory); // returns a {direction: ''}
    state = state.move(action.direction); // VillageState.move
    memory = action.memory; // overwrite the memory 

    console.log(`Moved to ${action.direction}`);
  }
}

// general random element function
function randomPick(array) {
  let choice = Math.floor(Math.random() * array.length);
  return array[choice];
}

function randomRobot(state) {
  // Get a village state,
  // randomly pick a direction based on the roads accessible by the village state
  return {direction: randomPick(roadGraph[state.place])};
}

// const newVillageState = new VillageState(randomPick(Object.keys(roadGraph)), []);

// console.log(randomRobot(newVillageState));

// Static function - means can be activated without instantiating
// Pick any random package (5 default). But the package's address isn't the same as itself
// Make a random VillageState with random parcels
VillageState.random = function(parcelCount = 5) {
  let parcels = [];
  
  console.log(roadGraph);
  
  for (let i = 0; i < parcelCount; i++) {
    let address = randomPick(Object.keys(roadGraph)); // get all the Keys only from the graph. And randomly pick from them
    let place;
    
    console.log(`random address: ${address}`);
    
    do {
      place = randomPick(Object.keys(roadGraph)); 
    } while (place == address); // dont pick same place and address
    
    console.log(`random place: ${place}`);
    
    parcels.push({place, address}); // parcel object design
  }
  
  console.log(parcels);
  
  return new VillageState("Post Office", parcels);
};

// const newVillageState = new VillageState(randomPick(Object.keys(roadGraph)), []);

// console.log(randomRobot(newVillageState));


// memory is just an array.
// state is the Village state
// mailRoute is the fixed route
// routeRobot will go just through all routes 
function routeRobot(state, memory) {
  if (memory.length == 0) {
    memory = mailRoute;
  }
  console.log(memory);
  return {direction: memory[0], memory: memory.slice(1)};
}


function findRoute(graph, from, to) {
  let work = [{at: from, route: []}];

  for (let i = 0; i < work.length; i++) {
    let {at, route} = work[i];

    for (let place of graph[at]) {
      if (place == to) return route.concat(place);
      
      if (!work.some(w => w.at == place)) {
        work.push({at: place, route: route.concat(place)});
      }
    }
  }
}

function goalOrientedRobot({place, parcels}, route) {
  if (route.length == 0) {
    let parcel = parcels[0];
    if (parcel.place != place) {
      route = findRoute(roadGraph, place, parcel.place);
    } else {
      route = findRoute(roadGraph, place, parcel.address);
    }
  }
  return {direction: route[0], memory: route.slice(1)};
}