const
  trampoline=initialaction=>initialvalue=>{
    let
      cont=true
     ,action=initalaction
     ,value=initialvalue
    while(cont)
      ({cont,action,value}=action(value))
    return value}
