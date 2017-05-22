console.log("classFactory")
app.factory("classFactory", function($http){
  console.log("classFactory")
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
