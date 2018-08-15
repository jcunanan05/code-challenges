/*
  Write a program that creates a string that represents an 8×8 grid, using newline characters to separate lines. At each position of the grid there is either a space or a "#" character. The characters should form a chessboard.

  Passing this string to console.log should show something like this:

   # # # #
  # # # # 
   # # # #
  # # # # 
   # # # #
  # # # # 
   # # # #
  # # # #

  When you have a program that generates this pattern, define a binding size = 8 and change the program so that it works for any size, outputting a grid of the given width and height.
*/

function chessBoard(size) {
  var str = '';
  var withSpace = true;

  //string builder
  //multiply size x size
  //build the string alternately
  for(let i = 1; i <= size * size; i++) {
    //bulid the string
    str += (withSpace ? ' ' : '#');

    //set space flag to false
    withSpace = !withSpace;

    //set modulo for newline
    if(i % size === 0 && i !== 0) {
      str += ' \n';
      withSpace = !withSpace;
    };
  }

  console.log(str);
}

chessBoard(8);