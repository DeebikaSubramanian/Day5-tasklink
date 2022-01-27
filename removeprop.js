var obj = {
    mykey:"value"
};
console.log(obj)
    function addProperty(obj,key) {
 return delete obj.mykey
 }
addProperty(obj,"mykey");
console.log("after removing property")
console.log(obj)