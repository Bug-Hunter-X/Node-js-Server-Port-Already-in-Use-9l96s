# Node.js Server Port Already in Use

This repository demonstrates a common error in Node.js where a server fails to start because the specified port is already in use.  The `bug.js` file contains the problematic code, while `bugSolution.js` provides a solution.

## Problem

Attempting to start a Node.js HTTP server on a port that's already occupied by another process results in an error. The server will not start, and an error message is thrown.

## Solution

The solution involves checking if the port is available before attempting to start the server.  A common approach is to use a library such as `portscanner` to check port availability, or to employ a more robust error handling strategy to gracefully handle the situation (as demonstrated in `bugSolution.js`).