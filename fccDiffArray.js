function diffArray(arr1, arr2) {
  var sameElements = [];
  // return element that doesn't exist in both arrays
  //compare 2 arrays
  arr1.forEach(element1 => {
    var sameElement = arr2.filter(element2 => {
      return element1 == element2;
    });

    if (sameElement[0]) sameElements.push(sameElement[0]);
  });

  //remove their same element
  sameElements.forEach(sameElement => {
    arr1.splice(arr1.indexOf(sameElement), 1);
    arr2.splice(arr2.indexOf(sameElement), 1);
  });
  //compile into new array
  return arr1.concat(arr2);
}

var result = diffArray(["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]);

console.log(result);