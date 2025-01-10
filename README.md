# Express.js: Handling undefined req.body

This repository demonstrates a common error in Express.js applications where an attempt to access `req.body` without proper checks can lead to crashes.  The `bug.js` file showcases the problematic code, while `bugSolution.js` provides a corrected version.

## Problem:

Accessing `req.body` directly without verification that a body exists (e.g., in POST requests without data) results in an error, causing the application to crash.

## Solution:

The solution involves checking if `req.body` is defined before accessing its properties.  This can be done using conditional statements or optional chaining.  The `bugSolution.js` file demonstrates the use of optional chaining for concise error handling.

## Setup:

1. Clone the repository.
2. Install Express.js: `npm install express`
3. Run the buggy code: `node bug.js` (observe the error)
4. Run the corrected code: `node bugSolution.js` (observe the successful execution)