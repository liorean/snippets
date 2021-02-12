// Implementing it
const
    testarray = [0,1,2,3,4,5,6,7,8,9].map(a=>a*a)
   ,search = list => element => {
        const
            helper = begin => end => {
                    const
                        midpoint = begin + end >> 1
                       ,pivot = list[midpoint]
//                      console.log(`begin: ${begin} midpoint: ${midpoint} end: ${end}`)
                    return(
                        begin < end
                       ?element < pivot
                       ?helper( begin )( midpoint )
                       :element > pivot
                       ?helper( midpoint + 1 )( end )
                       :midpoint
                       :void 0 ) }
        return helper( 0 )( list.length ) }
        
// Testing it:
for( let i = 0; i < 100; i++ )
    console.log( i, '\t:\t', search( testarray )( i ) )
