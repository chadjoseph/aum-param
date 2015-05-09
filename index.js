import listen from 'aum-listen';

var current;

listen('param', function (e) {
  current = e.detail;
});

export default function (key) {
  return current[key] || current.values;
}

