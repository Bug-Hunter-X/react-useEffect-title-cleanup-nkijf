# React useEffect Cleanup: Memory Leak in Document Title Update

This example demonstrates a common mistake when using the `useEffect` hook in React: forgetting to include a cleanup function to prevent memory leaks. The `useEffect` hook is used to update the document title based on a component's state. However, without proper cleanup, the title will continue to be updated even after the component is unmounted.

## Bug
The bug is in `bug.js`. The component updates the document title whenever the state changes using `useEffect`. However, it misses the cleanup function. Therefore, on every update and when the component is unmounted, the listener attached to the title is not removed, causing a memory leak. 

## Solution
The solution in `bugSolution.js` demonstrates the correct usage of the `useEffect` hook. It includes a cleanup function that removes the listener when the component unmounts. This ensures that there are no memory leaks. 