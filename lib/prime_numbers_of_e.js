import Decimal from 'decimal.js';
import euler from './euler';
import isPrime from './is_prime';

export function xthYDigitPrimeInE(x, y, iter) {
  iter = iter || 215;

  let e = euler(iter).replace('.', '');
  let i = 0;
  let primesFound = 0;

  for (i; i <= (e.length - y); i++) {
    let val = e.substring(i, i + y);

    if (val[0] === '0') {
      continue;
    }

    if (isPrime(val)) {
      primesFound += 1;
    }

    if (primesFound === x) {
      return val;
    }
  }

  return -1;
}
