function findMax(ar)
{
var x=Math.max.apply(null,ar)
return x
}
var ar = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
var max = findMax(ar);
console.log(max);