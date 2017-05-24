app.controller("ClassPageCtrl", function($scope, $location, studentFactory, $http){
  console.log("class page controller")

  //scoping studentProfile
  // var studentProfile = studentProfile;
  // $scope.studentProfile = studentProfile;

  //get all students
  studentFactory.getData()
  .then((data)=>{
    // console.log("data", data)
    let students = data.data;
    console.log(students)
    $scope.students = data.data
  })

  //deletes students form page
  $scope.delete = function (id) {
    $scope.id = id;
    console.log(id)
    $http.delete(`http://localhost:5000/api/v1/students/${id}`)
    .then((data)=>{
      console.log("student deleted", data.data)
      $http.get(`http://localhost:5000/api/v1/students`)
      .then((data)=> {
        $scope.students = data.data
      })
      .catch((err)=>{
        console.log(err)
      })
    })
  }

  //got to student parentProfile
  $scope.profilePage = function (id) {
    console.log("profile button pressed", id)
  }


})
