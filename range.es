const
  range=
    function*range({start=0,cont=n=>n<Infinity,step=n=>n+1}={}){
      let n=start
      while(cont(n)){
        yield n
        n=step(n)}}
 ,itermap=
    f=>function*itermap(iterable){
      for(let iteration of iterable)
        yield f(iteration)}
 ,take=
    (n=0)=>function*take(iterator){
      while(n-->0){
        let
          {value,done}=iterator.next()
        if(done)break;
        yield value}}
//    > x=range({end:n=>n<42,step:n=>n+3})
//    {}
//    > [...x]
//    [ 0, 3, 6, 9, 12, 15, 18, 21, 24, 27, 30, 33, 36, 39 ]
const
  endlesschurch=
    { start:f=>x=>x
     ,cont:x=>true
     ,step:n=>f=>x=>f(n(f)(x))}
 ,churchnumerals=
    range(endlesschurch)
 ,churchtostring=
    n=>`λf.λx.${n(m=>`f(${m})`)`x`}`
 ,first5churchnumbers=
    take(5)(itermap(churchtostring)(churchnumerals))
//    > console.log(...first5churchnumbers)
//    λf.λx.x λf.λx.f(x) λf.λx.f(f(x)) λf.λx.f(f(f(x))) λf.λx.f(f(f(f(x))))
