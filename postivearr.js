function getPositives(ar)
{ var x=[]
     x= ar.filter(ar=>ar>-1)
     return x
}
var ar = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
var arr=getPositives(ar)
console.log(arr)
