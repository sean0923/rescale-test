const asyncMap = (funcs, cb) => {
  const arr = [];
  let counter = 0;

  funcs.forEach((func, idx) => {
    func(item => {
      arr[idx] = item;
      counter++;
      if (counter === funcs.length) {
        cb(arr);
        // let result = await arr
        // return arr;
      }
    });

  });
};

asyncMap(
  [
    function(cb) {
      setTimeout(function() {
        cb('one');
      }, 200);
    },
    function(cb) {
      setTimeout(function() {
        cb('two');
      }, 100);
    },
  ],
  function(results) {
    // the results array will equal ['one','two'] even though
    // the second function had a shorter timeout.
    console.log(results); // ['one', 'two'], in that order.
  }
);
