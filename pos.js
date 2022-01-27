var arr = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
function countPositivesSumNegatives(arr) {
    sum=0
    sum1=0
    for(i=0;i<arr.length;i++)
    {
    if(Math.sign(arr[i])==1)
    {
    sum=sum+1
        }
    else
    {
    sum1=sum1+arr[i]
   
    }
    
}
console.log(sum)
    console.log(sum1)
 
}
countPositivesSumNegatives(arr)