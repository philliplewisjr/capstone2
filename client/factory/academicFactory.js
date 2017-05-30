app.factory("academicFactory", function($http){
  return {
    getAcademics: function () {
      return $http.get(`http://localhost:5000/api/v1/academic`)
      .then(function(response) {
        console.log(response.data.rows)
        return response.data.rows
      })
    }
  }
})
