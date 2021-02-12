function*traverse_breadth_first([...iterables]){
  while(0<iterables.length){
    const iterable=iterables.shift()
    const iterator=iterable[Symbol.iterator]()
    const {done,value}=iterator.next()
    if(done){if('return' in iterator) iterator.return()}
    else{
      iterables.push(iterator)
      yield value}}}
