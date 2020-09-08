module.exports = function getSeason(date) {
  if (!date) return 'Unable to determine the time of year!';
  try { date.getTime(); } catch (e) { throw e; }
  let month = date.getMonth() + 1;
  if (month >= 3 && month <= 5) return 'spring';
  if (month >= 6 && month <= 8) return 'summer';
  if (month >= 9 && month <= 11) return 'fall';
  return 'winter';
};
