const
  inspect=
    iterable=>(
      console.log('iterable:'.padEnd(0x20)+iterable)
     ,(({[Symbol.iterator]:$iterator})=>(
        console.log('  @@iterator:'.padEnd(0x20)+$iterator)
       ,(iterator=>{
          console.log('    (this=iterable):'.padEnd(0x20)+iterator)
         ;while(
            (({next})=>(
              console.log('      next:'.padEnd(0x20)+next)
             ,(iteration=>(
                console.log('        (this=iterator):'.padEnd(0x20)+iteration)
               ,(({done,value})=>(
                  console.log('          done:'.padEnd(0x20)+done)
                 ,console.log('          value:'.padEnd(0x20)+value)
                 ,!done))
                (iteration)))
            (next.call(iterator))))
          (iterator));return;})
        ($iterator.call(iterable))))
      (iterable))
