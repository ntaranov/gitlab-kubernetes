// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';

let error = console.error

console.error = function (message) {
  error.apply(console, arguments) // keep default behaviour
  throw (message instanceof Error ? message : new Error(message))
}
