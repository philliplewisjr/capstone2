console.log("teacher factory")
app.factory("teacherFactory", function($http){
  console.log("teacherFactory")
  return {
    getTeachers: function() {
      return $http.get(`http://localhost:5000/api/v1/teachers`)
      .then(function(data){
        console.log(data)
        return data
      })
    },
    getTeacherById: function () {
      return $http.get(`http://localhost:5000/api/v1/teachers/1`)
      .then(function(data){
        console.log(data)
        return data
      })
    }
  }
})
