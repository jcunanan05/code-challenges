## Challenge #1

Write a function called countRows() which will tell us the number of rows in our GRID. Remember that other lighthouse operators are going to be using this function, so it has to be able to work on a GRID of any size. It would be easy to write a function that just did return 12; but that wouldn't help operators with bigger or smaller areas!

You do NOT need to pass the GRID variable to the countRows() function, as it will be able to access it.

## Challenge #2

Write a function called countColumns() that will tell us the number of columns in our GRID. Again, remember that this has to work for all the lighthouse operators out there, no matter what size their area is. Also, your code will still be able to see the GRID variable, and you won't need to pass it as an argument to the function.

## Challenge #3

Now that we can do rows and columns, let's find out how big the size of our GRID is. I checked in with the lead developer at a company I know of, and she told me that this is one of the areas where re-using code is a great idea.

Write a function called gridSize() that will tell you the size of your grid in the format width x height. Your function should return a string, and in this example, your function should return the string '10 x 10'. But you have to make sure that you figure that string out by actually measuring your grid! Your code should make sure that it uses your countRows() and countColumns() functions that you've already finished.
