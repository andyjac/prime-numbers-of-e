import Decimal from 'decimal.js';
import factorial from './factorial';

export default function euler(n) {
  Decimal.set({ precision: n + 1 }); // set precision accuracy 1 past our target to avoid rounding error

  const dividend = new Decimal(1);

  let e = 1;
  let i = 1;

  for (i; i <= n; i++) {
    let accum = new Decimal(e);
    let divisor = new Decimal(factorial(i));

    e = accum.plus(dividend.dividedBy(divisor));
  }

  return truncateToLengthInclusive(e.toString(), n);
}

function truncateToLengthInclusive(val, n) {
  if (typeof val === 'number') {
    val = val.toString();
  }

  return val.substring(0, n + 1);
}
