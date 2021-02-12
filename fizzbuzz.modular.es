const fizzbuzz = (n) => {
  const test = (d, s, x) => !(n % d) > 0 ? () => s + x('') : x
  const fizz = (x) => test(3, 'Fizz', x)
  const buzz = (x) => test(5, 'Buzz', x)
  const hyzz = (x) => test(7, 'Hyzz', x)
  const nozz = (x) => test(11, 'Nozz', x)
  return fizz(buzz(hyzz(nozz((x) => x))))(n)
}
// Applying fizzbuzz to each number in the range [1,100] while keeping in paradigm left as an exercise for the reader
