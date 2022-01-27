var obj = {
       mykey:"value"
   };
       function getProperty(obj,key) {
    return obj.hasOwnProperty(key)?obj[key]:undefined;
    }
   console.log(getProperty(obj,'mykey'));
   console.log(getProperty(obj,'dummykey'))


  