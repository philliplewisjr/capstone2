app.controller("StudentCtrl", function($scope, studentFactory, teacherFactory, classFactory, $location, $http) {
  console.log("student controller")

  //get all students
  studentFactory.getData()
  .then((data)=>{
    console.log("data", data)
  })
  .catch((err)=>{
    console.log(err)
  })

  //get all teachers
  teacherFactory.getTeachers()
  .then((data)=>{
    console.log(data)
  })

  //get all classes
  classFactory.getClass()
  .then((data)=>{
    console.log(data)
  })

  //get one student by id
 studentFactory.getStudent()
 .then((data)=>{
  //  console.log(data.data)
   var student = data.data;
   console.log("student", student)
   $scope.student = data.data;
 })

 //get teacher by id
 teacherFactory.getTeacherById()
 .then((data)=>{
  //  console.log(data.data)
   var teacher = data.data;
   console.log("teacher", teacher)
   $scope.teacher = data.data;
 })

  //upload photo
  $scope.addPhoto = ()=> {
    console.log("photo function")
    var photo = document.getElementById("file").files[0]
    r = new FileReader();

    r.onloadend = function(e) {
      var data = e.target.result;
      console.log("data", data)
    }
  }

})
