console.log(sumCSV("1.5, 2.3, 3.1, 4, 5.5, 6, 7, 8, 9, 10.9"));
function sumCSV(s)
{
  // your code here
  var s1=s.split(",").map(Number)
  //console.log(s1)
  var n=0
  for(i=0;i<s1.length;i++)
   n=n+s1[i]
return n
}