// Originally posted at
//    https://gist.github.com/liorean/b33679bdac795e990f66378fff4db29b 
// continues from 
//    https://gist.github.com/liorean/58667acd9b8b4554a9c7b4740065e93c
// and
//    https://gist.github.com/liorean/fa6b1f147df2dd3bd0c99e3254dd21f0

const map=(f,array)=>{
  const iterator=array[Symbol.iterator]()
  return{
    [Symbol.iterator](){return this}
   ,next(){
      let {done,value}=iterator.next()
      if(done){
        if('return' in iterator)
          iterator.return()
        return{done}}
      return {value:f(value)}}}}

console.log(...map(e=>2**e,[0,1,2,3,4,5,6,7,8,9]))

//> ch itermap.es
//  1 2 4 8 16 32 64 128 256 512
//> js itermap.es
//  1 2 4 8 16 32 64 128 256 512
//> node itermap.es
//  1 2 4 8 16 32 64 128 256 512
