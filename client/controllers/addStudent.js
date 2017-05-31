app.controller("AddStudentCtrl", function($scope, $http, $location){
  console.log("add student controller")

  $scope.addStudent = function(student) {
    Materialize.toast('New Student Added', 4000)
    console.log("add student button pressed")
    student ={
      firstname: $scope.firstName,
      lastname: $scope.lastName,
      picture: $scope.pictureUrl,
      grade: $scope.grade,
      parent: $scope.parent,
      phone: $scope.phone,
      gender: $scope.gender
    }
    console.log(student)
    $http.post(`http://localhost:5000/api/v1/students`, student)
    .then((data)=>{
      console.log(data)
      $http.get(`http://localhost:5000/api/v1/students`)
      .then((data)=> {
        console.log(data.data)
      })
      $location.url("/class")
    })
  }
})
