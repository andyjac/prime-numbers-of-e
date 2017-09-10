export default function isPrime(n) {
  let i = 2;
  let limit = Math.sqrt(n);

  for (i; i < limit; i++) {
    if (n % i === 0) {
      return false;
    }
  }

  return n > 1;
}
