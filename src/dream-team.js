module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) return false;
  return members.map((member) => (typeof member === 'string' ? member.trim().substr(0, 1).toUpperCase() : '')).sort().join('');
};
