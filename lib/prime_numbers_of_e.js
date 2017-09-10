import Decimal from 'decimal.js';
import euler from './euler';
import isPrime from './is_prime';

export function xthYDigitPrimeInE(x, y, iter = 133) {
  let e = euler(iter).replace('.', '');
  let i = 0;
  let primesFound = 0;

  for (i; i <= (e.length - y); i++) {
    let val = e.substring(i, i + y);

    if (isPrime(val)) {
      primesFound += 1;
    }

    if (primesFound === x) {
      return val;
    }
  }

  return -1;
}
