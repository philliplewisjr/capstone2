console.log("studentFactory")
app.factory("studentFactory", function($http){
  console.log("studentFactory")
  return {
    getData: function () {
      return $http.get(`http://localhost:5000/api/v1/students`)
      .then(function(data){
        console.log("data", data.data)
        return data
      })
   },
   getStudent: function () {
     return $http.get(`http://localhost:5000/api/v1/students/2`)
     .then(function(data){
       console.log("data", data.data)
       return data
     })
   },
 }

 })
