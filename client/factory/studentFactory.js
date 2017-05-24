
app.factory("studentFactory", function($http){

  return {
    getData: function () {
      return $http.get(`http://localhost:5000/api/v1/students`)
      .then(function(data){
        console.log("data", data.data)
        return data
      })
   },
   getStudent: function (id) {
     return $http.get(`http://localhost:5000/api/v1/students/${id}`)
     .then(function(data){
       console.log("data", data.data)
       return data.data
     })
   }
 }

 })
