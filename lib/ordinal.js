export default function ordinal(n) {
  const endings = {
    1: "st",
    2: "nd",
    3: "rd"
  };

  if (typeof n !== 'number') {
    n = parseInt(n, 10);
  }

  if (isNaN(n)) {
    return null;
  }

  if (n >= 11 && n <= 20) { // always return 'nth' for teens
    return `${n}th`;
  }

  n = n.toString();
  let ending = n[n.length - 1];

  return n + (endings[ending] || 'th');
}
