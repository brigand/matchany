const { Match, Condition } = require('./core');
const RcMap = require('./rcMap');

let counter = 10000000;
const MATCHERS = new RcMap();

Condition._overrideToString((condition) => {
  const id = `__matchany_matcher_${++counter}`;
  MATCHERS.entry(id).orInsert(condition);
  return id;
});

function match(...values) {
  const matchers = values.pop();
  const entries = Object.entries(matchers);

  const toDrop = [];
  const checks = entries.map(([key, consequent]) => {
    const entry = MATCHERS.entry(key);
    if (entry.exists()) {
      toDrop.push(entry);
      return [entry.get(), consequent];
    } else if (key === '_' || key === '$default') {
      const cond = new Condition((x) => new Match(x)).named('$default', []);
      return [cond, consequent];
    } else {
      const cond = new Condition((x) =>
        x === key ? new Match(x) : null,
      ).named('literal', [key]);
      return [cond, consequent];
    }
  });

  let result = null;
  for (const [cond, consequent] of checks) {
    const maybeMatch = cond.exec(...values);
    if (maybeMatch && maybeMatch.values) {
      if (typeof consequent === 'function') {
        result = new Match(consequent(...maybeMatch.values));
      } else {
        result = new Match(consequent);
      }

      break;
    }
  }

  for (const entry of toDrop) {
    entry.drop();
  }

  if (result) {
    return result.values.length < 2 ? result.values[0] : result.values;
  }

  return;
}

module.exports = match;