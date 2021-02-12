 function* itermap(fun,iter){
  for(let element of iter[Symbol.iterator]())
    if(void 0!==element[Symbol.iterator])
      yield* itermap(fun,element)
    else
      yield fun(element)
}
let
  arr=[0,[1,[2,3]],[4,5,6],7,[8,9]]
 ,flatarr=[...itermap(x=>x,arr)]
console.log(flatarr)
  //  [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
console.log([...itermap(x=>0x30+x,arr)])
  //  [ 48, 49, 50, 51, 52, 53, 54, 55, 56, 57 ]
console.log([...itermap(x=>String.fromCharCode(0x30+x),arr)])
  //  [ '0', '1', '2', '3', '4', '5', '6', '7', '8', '9' ]
