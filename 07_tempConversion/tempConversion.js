const convertToCelsius = function (fara) {
  let answer = ((fara - 32) * 5) / 9;
  return Math.round(answer * 10) / 10;
};

const convertToFahrenheit = function (celcius) {
  let answer = celcius * (9 / 5) + 32;
  return Math.round(answer * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
