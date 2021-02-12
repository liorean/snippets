{
const
  countdigits=n=>1+(Math.log10(Math.abs(n))|0)
  console.log([-99999,-100,-1,0,1,100,99999].map(countdigits))
}
//[
//  5, 3, 1, 1,
//  1, 3, 5
//]
