module.exports = class DepthCalculator {
  calculateDepth(arr) {
    return Array.isArray(arr) ? 1 + Math.max(...arr.map((el) => {
      let calc = this.calculateDepth(el);
      return !isFinite(calc) ? 1 : calc;
    })) : 0;
  }
};