module.exports = function repeater(str, options) {
  let {
    repeatTimes,
    separator,
    addition,
    additionRepeatTimes,
    additionSeparator
  } = options;

  repeatTimes = repeatTimes || 1;
  separator = separator || '+';
  additionRepeatTimes = additionRepeatTimes || 1;
  additionSeparator = additionSeparator || '|';

  let temp1 = [];
  let temp2 = [];
  for (let i = 1; i <= repeatTimes; i++) {
    temp2 = [];
    for (let j = 1; j <= additionRepeatTimes; j++) {
      temp2.push(addition === null ? String(addition) : addition);
    }
    temp1.push(str + temp2.join(additionSeparator));
  }

  return temp1.join(separator);
};
