const reverseString = function (thestring) {
  let newstring = "";
  for (let i = thestring.length - 1; i >= 0; i--) {
    newstring += thestring[i];
  }
  return newstring;
};

// Do not edit below this line
module.exports = reverseString;
