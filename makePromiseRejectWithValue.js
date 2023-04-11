/**
 * 
 * Should return promise with error
 * 
 * @returns {Promise<,"Boo!">}
 */
function makePromiseRejectWithBoo(){
    // put your code here
}

console.log(makePromiseRejectWithBoo());



function makePromiseRejectWithBoo() {
    return Promise.reject("Boo!");
  }
 
  makePromiseRejectWithBoo()
    .catch(error => {
      console.error(error); // Output: Boo!
    });
 
