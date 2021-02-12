const
  flatten=([arr,...rest])=>void 0!==arr?[...arr,...flatten(rest)]:rest
    arr=[[0,1,2,3],[4,5,6],[7,8,9]]
    flatarr=flatten(arr)
console.log(flatarr) //[ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
