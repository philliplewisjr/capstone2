
app.factory("classFactory", function($http){
  
  return {
    getClass: function () {
      return $http.get(`http://localhost:5000/api/v1/class`)
      .then(function(data){
        console.log("data", data.data)
        return data;
      })
    }
  }
})
