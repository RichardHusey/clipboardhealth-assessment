# Refactoring

You've been asked to refactor the function `deterministicPartitionKey` in [`dpk.js`](dpk.js) to make it easier to read and understand without changing its functionality. For this task, you should:

1. Write unit tests to cover the existing functionality and ensure that your refactor doesn't break it. We typically use `jest`, but if you have another library you prefer, feel free to use it.
2. Refactor the function to be as "clean" and "readable" as possible. There are many valid ways to define those words - use your own personal definitions, but be prepared to defend them. Note that we do like to use the latest JS language features when applicable.
3. Write up a brief (~1 paragraph) explanation of why you made the choices you did and why specifically your version is more "readable" than the original.

You will be graded on the exhaustiveness and quality of your unit tests, the depth of your refactor, and the level of insight into your thought process provided by the written explanation.

## Your Explanation Here - Richard Husey, chrisgogo68@gmail.com

My version of the deterministicPartitionKey function is more readable than the original because I have split the code into specific blocks which can easily help the reader identify what that particular code is meant to do and why. 
I also replaced the if-else if-else condition to a ternary operator for better readability. 
Furthermore, I consolidated all of the computations involving the crypto module into one cryptographic hash evaluated with the SHA3-512 algorithm.
 This makes the function cleaner and easier to understand, as the reader no longer has to track the process of two separate hash evaluations.
