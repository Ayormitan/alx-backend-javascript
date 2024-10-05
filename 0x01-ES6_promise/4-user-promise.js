import createUser from './utils.js';

export default function signUpUser(firstName, lastName) {
  // Create and resolve a promise with firstname and lastname object
  return Promise.resolve({ firstName, lastName });
}
