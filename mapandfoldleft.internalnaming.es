const
  map=mapper=>{
    const mapover=iterable=>{
      const iterator=iterable[Symbol.iterator]()
      const accumulator=[]
      const iterate=({done,value})=>{
        if(done) return accumulator
        accumulator.push(mapper(value))
        return iterate(iterator.next())}
      return iterate(iterator.next())}
    return mapover}
 ,foldleft=folder=>{
    const foldfrom=initialvalue=>{
      const foldover=iterable=>{
        const iterator=iterable[Symbol.iterator]()
        const iterate=accumulator=>({done,value})=>{
          if(done) return accumulator
          return iterate(folder(accumulator)(value))(iterator.next())}
        return iterate(initialvalue)(iterator.next())}
      return foldover}
    return foldfrom}
