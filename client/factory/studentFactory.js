
app.factory("studentFactory", function($http){

  return {
    getData: function () {
      return $http.get(`http://localhost:5000/api/v1/students`)
      .then(function(data){
        // console.log("data", data.data)
        return data
      })
   },
   getStudent: function (id) {
     return $http.get(`http://localhost:5000/api/v1/students/class/${id}`)
     .then(function(data){

       var classInfo = data.data.class
       console.log("classInfo", classInfo)

       var classData = []
       for(let i = 0; i < classInfo.length; i++) {
       classData.push(classInfo[i].academics)
       }
       console.log("classData", classData)
       return classData

     })
   },
   getStudentById: function (id) {
     return $http.get(`http://localhost:5000/api/v1/students/${id}`)
     .then(function(response){
       console.log(response.data)
       return response.data
     })
   }
 }

 })
