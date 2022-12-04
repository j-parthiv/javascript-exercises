const repeatString = function (string, times) {
  let answer = "";
  if (times < 0) {
    return "ERROR";
  } else if (times == 0) {
    return "";
  } else {
    for (let i = 0; i < times; i++) {
      answer += string;
    }
    return answer;
  }
};

// Do not edit below this line
module.exports = repeatString;
