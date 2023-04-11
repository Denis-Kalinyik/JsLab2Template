// For all exercises, if an error occurs we want to `console.err('something wrong happened!')`
// 1: Print " 1 C D" by using callbacks with `addStringWithCallback()`
// 2: Print " 2 C D" by using promises with `addStringWithPromise()`
// 3: Print " 3 C D" by using async/await with `addStringWithPromise()`

function addStringCallback (previous, current, callback) {
    setTimeout(() => {
      if (Math.random() > 0.8) {
        callback(new Error('error!'));
      } else {
        callback(null, previous + ' ' + current);
      }
    }, Math.floor(Math.random() * 100));
}
  
function addStringPromise (previous, current) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (Math.random() > 0.8) {
          reject(new Error('error!'));
        }
        resolve(previous + ' ' + current);
      }, Math.floor(Math.random() * 100));
    })
}

// put your code here
function addStringCallback (previous, current, callback) {
    setTimeout(() => {
      if (Math.random() > 0.8) {
        callback(new Error('error!'));
      } else {
        callback(null, previous + ' ' + current);
      }
    }, Math.floor(Math.random() * 100));
}
 
function addStringPromise (previous, current) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (Math.random() > 0.8) {
          reject(new Error('error!'));
        }
        resolve(previous + ' ' + current);
      }, Math.floor(Math.random() * 100));
    })
}


// Question 1: using callbacks
addStringCallback('', '1', (err, result1) => {
  if (err) {
    console.error('something wrong happened!');
  } else {
    addStringCallback(result1, 'C', (err, result2) => {
      if (err) {
        console.error('something wrong happened!');
      } else {
        addStringCallback(result2, 'D', (err, result3) => {
          if (err) {
            console.error('something wrong happened!');
          } else {
            console.log(result3);
          }
        });
      }
    });
  }
});


// Question 2: using promises
addStringPromise('', '2')
  .then(result1 => addStringPromise(result1, 'C'))
  .then(result2 => addStringPromise(result2, 'D'))
  .then(result3 => console.log(result3))
  .catch(error => console.error('something wrong happened!'));


// Question 3: using async/await
async function printResult() {
  try {
    const result1 = await addStringPromise('', '3');
    const result2 = await addStringPromise(result1, 'C');
    const result3 = await addStringPromise(result2, 'D');
    console.log(result3);
  } catch (error) {
    console.error('something wrong happened!');
  }
}


printResult();
