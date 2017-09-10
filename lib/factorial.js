import Decimal from 'decimal.js';

export default function factorial(n) {
  if (n <= 0) {
    return 0;
  }

  let result = new Decimal(1);
  let i = 2;

  for (i; i <= n; i++) {
    result = result.times(i);
  }

  return result;
}
