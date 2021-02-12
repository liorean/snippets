    let foldtest=(()=>{
    const
      _=void 0
     ,regular_foldl=(f,[e,...l],a)=>_!==e?regular_foldl(f,l,f(a,e)):a
     ,curried_foldl=f=>([e,...l])=>a=>_!==e?curried_foldl(f)(l)(f(a)(e)):a
     ,cps_regular_foldl=
        (k,f,[e,...l],a)=>_!==e?f(a=>cps_regular_foldl(k,f,l,a),a,e):k(a)
     ,cps_curried_foldl=
        k=>f=>([e,...l])=>_!==e?a=>f(cps_curried_foldl(k)(f)(l))(a)(e):k
     ,regular_foldr=(f,[e,...l],a)=>_!==e?f(e,regular_foldr(f,l,a)):a
     ,curried_foldr=f=>([e,...l])=>a=>_!==e?f(e)(curried_foldr(f)(l)(a)):a
     ,cps_regular_foldr=
        (k,f,[e,...l],a)=>_!==e?cps_regular_foldr(a=>f(k,e,a),f,l,a):k(a)
     ,cps_curried_foldr=k=>f=>([e,...l])=>_!==e?cps_curried_foldr(f(k)(e))(f)(l):k
     ,regular_pair=(a,b)=>`(${a},${b})`
     ,curried_pair=a=>b=>`(${a},${b})`
     ,cps_regular_pair=(k,a,b)=>k(`(${a},${b})`)
     ,cps_curried_pair=k=>a=>b=>k(`(${a},${b})`)
     ,regular_call=(a,b)=>`f(${a},${b})`
     ,curried_call=a=>b=>`f(${a})(${b})`
     ,cps_regular_call=(k,a,b)=>k(`${b}|>_=>f(${a},_)`)
     ,cps_curried_call=k=>a=>b=>k(`${b}|>(${a}|>f)`)
     ,list=[1,2,3,4,5,6,7,8,9]
     ,init=0

    // foldl:
    console.log('\t',
      regular_foldl(regular_pair,list,init),'\n\t'
    //  (((((((((0,1),2),3),4),5),6),7),8),9)
     ,regular_foldl(regular_call,list,init),'\n\n')
    //  f(f(f(f(f(f(f(f(f(0,1),2),3),4),5),6),7),8),9)

    console.log('\t',
      curried_foldl(curried_pair)(list)(init),'\n\t'
    //  (((((((((0,1),2),3),4),5),6),7),8),9)
     ,curried_foldl(curried_call)(list)(init),'\n\n')
    //  f(f(f(f(f(f(f(f(f(0)(1))(2))(3))(4))(5))(6))(7))(8))(9)

    cps_regular_foldl(cps_regular_foldl(a=>b=>console.log('\t',a,'\n\t',b,'\n\n')
     ,cps_regular_pair,list,init)
    //  (((((((((0,1),2),3),4),5),6),7),8),9)
     ,cps_regular_call,list,init)
    //  9|>_=>f(8|>_=>f(7|>_=>f(6|>_=>f(5|>_=>f(4|>_=>f(3|>_=>f(
    //      2|>_=>f(1|>_=>f(0,_),_),_),_),_),_),_),_),_)

    cps_curried_foldl(cps_curried_foldl(a=>b=>console.log('\t',a,'\n\t',b,'\n\n'))
     (cps_curried_pair)(list)(init))
    //  (((((((((0,1),2),3),4),5),6),7),8),9)
     (cps_curried_call)(list)(init)
    //  9|>(8|>(7|>(6|>(5|>(4|>(3|>(2|>(1|>(0|>f)|>f)|>f)|>f)|>f)|>f)|>f)|>f)|>f)

    // foldr:
    console.log('\t',
      regular_foldr(regular_pair,list,init),'\n\t'
    //  (1,(2,(3,(4,(5,(6,(7,(8,(9,0)))))))))
     ,regular_foldr(regular_call,list,init),'\n\n')
    //  f(1,f(2,f(3,f(4,f(5,f(6,f(7,f(8,f(9,0)))))))))

    console.log('\t',
      curried_foldr(curried_pair)(list)(init),'\n\t'
    //  (1,(2,(3,(4,(5,(6,(7,(8,(9,0)))))))))
     ,curried_foldr(curried_call)(list)(init),'\n\n')
    //  f(1)(f(2)(f(3)(f(4)(f(5)(f(6)(f(7)(f(8)(f(9)(0)))))))))

    cps_regular_foldr(cps_regular_foldr(a=>b=>console.log('\t',b,'\n\t',a,'\n\n'),cps_regular_call,list,init)
    //  (1,(2,(3,(4,(5,(6,(7,(8,(9,0)))))))))
     ,cps_regular_pair,list,init)
    //  0|>_=>f(9,_)|>_=>f(8,_)|>_=>f(7,_)|>_=>f(6,_)|>_=>
    //      f(5,_)|>_=>f(4,_)|>_=>f(3,_)|>_=>f(2,_)|>_=>f(1,_)

    cps_curried_foldr(cps_curried_foldr(a=>b=>console.log('\t',b,'\n\t',a,'\n\n'))
     (cps_curried_call)(list)(init))
    //  (1,(2,(3,(4,(5,(6,(7,(8,(9,0)))))))))
     (cps_curried_pair)(list)(init)
    //  0|>(9|>f)|>(8|>f)|>(7|>f)|>(6|>f)|>(5|>f)|>(4|>f)|>(3|>f)|>(2|>f)|>(1|>f)
    })
    foldtest()
