# Refactoring

You've been asked to refactor the function `deterministicPartitionKey` in [`dpk.js`](dpk.js) to make it easier to read and understand without changing its functionality. For this task, you should:

1. Write unit tests to cover the existing functionality and ensure that your refactor doesn't break it. We typically use `jest`, but if you have another library you prefer, feel free to use it.
2. Refactor the function to be as "clean" and "readable" as possible. There are many valid ways to define those words - use your own personal definitions, but be prepared to defend them. Note that we do like to use the latest JS language features when applicable.
3. Write up a brief (~1 paragraph) explanation of why you made the choices you did and why specifically your version is more "readable" than the original.

You will be graded on the exhaustiveness and quality of your unit tests, the depth of your refactor, and the level of insight into your thought process provided by the written explanation.

## Your Explanation Here - Richard Husey, chrisgogo68@gmail.com

My refactored version uses ES6 best practices, such as declaring the constant variable at the top to improve readability and using implicit variable declaration and variable reassignment to reduce the number of lines of code. Furthermore, I have included an if statement to check the value of the parameter is not a string datatype and modified the existing if statement to include evaluation for the string length, thus improving the code readability by both cutting down the lines of code and the amount of nested statements. To summarise, my refactored version is more readable than the original as it utilises fewer lines of code and reduces the need for excessive comparison and nested statements.