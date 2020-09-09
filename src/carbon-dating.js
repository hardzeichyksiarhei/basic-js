const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {
  if (typeof sampleActivity !== 'string' || !sampleActivity) return false;

  let activity = parseFloat(sampleActivity);
  if (Number.isNaN(activity) || activity <= 0 || activity > MODERN_ACTIVITY) return false;

  let k = 0.693 / HALF_LIFE_PERIOD;

  return Math.ceil(Math.log(MODERN_ACTIVITY / activity) / k);
};
