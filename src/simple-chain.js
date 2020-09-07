const chainMaker = {
  links: [],

  getLength() {
    return this.links.length;
  },
  addLink(value = '') {
    this.links.push('( ' + value + ' )')
    return this;
  },
  removeLink(position) {
    if (!Number.isInteger(position) || position < 1) {
      this.links = [];
      throw TypeError('"position" is not a integer number');
    }
    this.links.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.links.reverse();
    return this;
  },
  finishChain() {
    let result = this.links.join('~~');
    this.links = [];
    return result;
  }
};

module.exports = chainMaker;
