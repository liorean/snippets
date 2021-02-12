const
  curry=
    f=>(...a)=>
      f.length>a.length
     ?(...b)=>curry(f)(...a,...b)
     :f(...a)
 ,a=curry((a,b,c,d,...e)=>console.log(a,b,c,d,e))
//>a(0)(1,2)(3)
//    0 1 2 3 []
//    undefined
//> a(0,1)(2)(3,4,5,6)
//    0 1 2 3 [ 4, 5, 6 ]
//    undefined
