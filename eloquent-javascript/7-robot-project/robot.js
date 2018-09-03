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

// split the string, 
// add 1 place, and all the destinations you can go from that place
function buildGraph(roads) {
  const graph = Object.create(null); // {}

  function addEdge(from, to) {
    if(graph[from] == null) graph[from] = [to];
    else graph[from].push(to);
  }

  for(let [from, to] of roads.map(road => road.split('-'))) {
    addEdge(from, to);
    addEdge(to, from);
  }

  return graph;
}

// State of the village that accepts a place, and an array of objects (parcels) e.g. [{place: 'Office', address: 'Alice house'}]

// Village state can move and deliver parcels.
// move will - change the current place to the destination place.
// deliver will remove a parcel that has same place as the village state.
class VillageState {
  constructor(place, parcels) {
    this.place = place;
    this.parcels = parcels;
  }

  move(destination) {
    if(!roadGraph[this.place].includes(destination)) {
      return this; // invalid destination, just return original
    } else {
      // move and deliver a parcel
      let updatedParcels = this.parcels.map(parcel => {
        if(parcel.place == this.place) return { 
          place: destination, 
          address: parcel.address 
        }
        else return parcel;
      }).filter(parcel => parcel.place != parcel.address);

      return new VillageState(destination, updatedParcels);
    }
  }
}

let first = new VillageState(
  "Post Office",
  [{place: "Post Office", address: "Alice's House"}]
);
let next = first.move("Alice's House");

console.log(next.place);
// → Alice's House
console.log(next.parcels);
// → []
console.log(first.place);
// → Post Office