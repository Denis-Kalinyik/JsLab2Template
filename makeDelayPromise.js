/**
 * 
 * Should return a promise that resolves with the value after delayInMs
 *
 * @param {any} value 
 * @param {number} delayInMs 
 * @return {Promise<any>} - A promise that will resolve with the value after delayInMs milliseconds
 */
function makeDelayPromise(value, delayInMs){
    // put your code here
}

console.log(makeDelayPromise('test', 1000));






function makeDelayPromise(value, delayInMs) {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(value);
      }, delayInMs);
    });
  }
  makeDelayPromise('test', 1000)
    .then(value => {
      console.log(value); // Output: 'test'
    });
