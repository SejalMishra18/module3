// Q - Write a function f that returns product of x and y with both of the following function calls

// f(x, y)
// f(x)(y)

//solution
function f(x,y)
{
    if(y==undefined)
    {
        return function(y)
        {
            return x*y;
        }
    }
    else{
        return x*y;
    }
}
console.log(f(4,5));
console.log(f(4)(3));