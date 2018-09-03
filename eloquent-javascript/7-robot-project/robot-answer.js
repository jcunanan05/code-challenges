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