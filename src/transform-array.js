function isRule(el) {
  return ['--discard-next', '--discard-prev', '--double-next', '--double-prev'].includes(el);
};

module.exports = function transform(arr) {
  if (!Array.isArray(arr)) throw Error('"arr" is not an array');
  let copyArr = [...arr];
  for (let i = 0; i < copyArr.length; i++) {
    switch (copyArr[i]) {
      case '--discard-next':
        if (!isRule(copyArr[i + 1])) copyArr.splice(i + 1, 1);
        break;
      case '--discard-prev':
        if (copyArr[i - 1] !== undefined && !isRule(copyArr[i - 1])) {
          copyArr.splice(i - 1, 1);
        }
        break;
      case '--double-next':
        if (copyArr[i + 1] !== undefined && !isRule(copyArr[i + 1])) copyArr.splice(i + 1, 0, copyArr[i + 1]);
        break;
      case '--double-prev':
        if (copyArr[i - 1] !== undefined && !isRule(copyArr[i - 1])) {
          copyArr.splice(i - 1, 0, copyArr[i - 1]);
          copyArr.splice(i + 1, 1);
        }
        break;
    }
  }
  return copyArr.filter(el => !isRule(el));
};
