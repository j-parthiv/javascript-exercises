const removeFromArray = function (...args) {
  const array = args[0];
  const newarray = [];

  array.forEach((item) => {
    if (!args.includes(item)) {
      newarray.push(item);
    }
  });
  return newarray;
};

// Do not edit below this line
module.exports = removeFromArray;
