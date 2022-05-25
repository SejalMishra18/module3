// Q - Convert the following function "f" to a pure function and create an impure function g which is a higher order function which take result of f and print it like f does it here.

let obj = {
    1: 0,
    2: 1,
    3: 2,
    4: 3,
    5: 4,
    length: 5,
  };
  
 function f(obj)
 {
   let nobj={};
   for (let i=1;i<obj.length;i++)
   {
     nobj[i]=obj[i]+1;
   }
   nobj["5"]=4;
      return nobj;
  }

  function g(obj,cb){
    let nObj = cb(obj);
    for (let x in nObj) {
      console.log(`at index ${x} we have value ${nObj[x]}`);
    }
  }
  g(obj,f);
  