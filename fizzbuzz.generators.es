function* everysooften(num,val){
  let x=num;
  while(0<--x)
    yield;
  yield val;
  yield* everysooften(num,val)}
function* combine(...its){
  while(true)
    yield its
     .map(it=>it.next().value)
     .reduce((a,b)=>void 0===b?a:void 0===a?b:a.concat(b),void 0)}
function* from(num){
  do yield num++
  while(true)}
function* stringify(it){
  let x;
  do{
    x=it.next()
    yield `${x.value}`
  }while(!x.done)}
function* choose(...its){
  while(true)
    yield its
     .map(it=>it.next().value)
     .find(it=>void 0!==it)}
function* take(num,it){
  while(num-->0)
    yield it.next().value}
let
  fizz=everysooften(3,'fizz')
 ,buzz=everysooften(5,'buzz')
 ,fizzbuzz=combine(fizz,buzz)
 ,range=stringify(from(1))
 ,fizzbuzzes=choose(fizzbuzz,range)
 ,result=take(100,fizzbuzzes);
[...result].forEach(s=>console.log(s))
