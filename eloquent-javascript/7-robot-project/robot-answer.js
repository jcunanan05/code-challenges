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


class VillageState {
  constructor(place, parcels) {
    this.place = place;
    this.parcels = parcels;
  }

  move(destination) {
    // the current place has a list of accessible roads, if it is accessible, we will remove the parcel and return a new Village state without that parcel.
    if (!roadGraph[this.place].includes(destination)) {
      return this;
    } else {
      let parcels = this.parcels.map(p => {
        if (p.place != this.place) return p;

        return {place: destination, address: p.address};
      }).filter(p => p.place != p.address);

      return new VillageState(destination, parcels);
    }
  }
}

// Accept a village state, 
// basically deliver the parcels
function runRobot(state, robot, memory) {
  for (let turn = 0;; turn++) {
    if (state.parcels.length == 0) {
      console.log(`Done in ${turn} turns`);
      break;
    }

    let action = robot(state, memory);
    state = state.move(action.direction);
    memory = action.memory;

    console.log(`Moved to ${action.direction}`);
  }
}

// Choose Random index on the array
function randomPick(array) {
  let choice = Math.floor(Math.random() * array.length);
  return array[choice];
}

// Random pick a place to go based on the VillageState's place.
function randomRobot(state) {
  return {direction: randomPick(roadGraph[state.place])};
}

// Static function - means can be activated without instantiating
// Pick any random package (5 default). But the package's address isn't the same as itself
// Make a random VillageState with random parcels
VillageState.random = function(parcelCount = 5) {
  let parcels = [];

  for (let i = 0; i < parcelCount; i++) {
    let address = randomPick(Object.keys(roadGraph));
    let place;

    do {
      place = randomPick(Object.keys(roadGraph));
    } while (place == address);

    parcels.push({place, address});
  }

  return new VillageState("Post Office", parcels);
};

// basically return direction and memory. Also remove the most recent memory because it's already visited
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