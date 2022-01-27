
var s = reverseString("JavaScript");
console.log(s);
function reverseString(s)
{
   var m=s.split("").reverse(s).join(" ")
   var n=m.split(" ").join("")
   return n
}