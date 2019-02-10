function foo(x) {
  y++;
  z = x * y;
}

var y = 5,
  z;

foo(20);
z;
// 120

foo(25);
z;
// 175

// pure wrapper
function pureBar(x, y) {
  var z;
  foo(x);
  return [y, z];
  function foo(x) {
    y++;
    z = x * y;
  }
}

console.log('pure function: ', pureBar(20, 5));

// pure side-effect
function pureSideEffectBar(curX, curY) {
  var [origY, origZ] = [y, z];
  y = curY;
  foo(curX);
  var [newY, newZ] = [y, z];
  [y, z] = [origY, origZ];
  return [newY, newZ];
}

console.log('pure side-effect: ', pureSideEffectBar(20, 5));
