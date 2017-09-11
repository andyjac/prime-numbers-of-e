export default function range(start, stop, step) {
  start = start || 0;
  step = step || 1;

  let result = [];
  let i = start;

  for (i; i <= stop; i += step) {
    result.push(i);
  }

  return result;
}
