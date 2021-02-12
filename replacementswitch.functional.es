    const
      handlers=
        new Map(
          [ [ 0,'ZERO']
           ,[ 1,'ONE']
           ,[ '1','String of 1']])
     ,makeChoice=
        paths=>
          missing=>
            key=>
              paths.has(key)
             ?paths.get(key)
             :missing(key)
     ,handlerChoice=
        makeChoice
        ( handlers)
        ( key=>{throw `No path provided for key ${key}`})

    console.log(handlerChoice(0))
    console.log(handlerChoice(1))
    console.log(handlerChoice('1'))
    console.log(handlerChoice(42))

    //ZERO
    //ONE
    //String of 1
    //
    // somepath\test.es:17
    //  ( key=>{throw `No path provided for key ${key}`});
    //          ^
    //No path provided for key 42
