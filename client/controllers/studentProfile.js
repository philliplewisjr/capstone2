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
  $scope.updateStudent = (id)=> {
    console.log(id)
  }

$scope.updateProfile = ()=>{
    $('.modal').modal({
       dismissible: true, // Modal can be dismissed by clicking outside of the modal
       opacity: .5, // Opacity of modal background
       inDuration: 300, // Transition in duration
       outDuration: 200, // Transition out duration
       startingTop: '4%', // Starting top style attribute
       endingTop: '10%', // Ending top style attribute
       ready: function(modal, trigger) { // Callback for Modal open. Modal and trigger parameters available.
         alert("Ready");
         console.log(modal, trigger);
       },
      //  complete: function() { alert('Closed'); } // Callback for Modal close
     }
   );
 }

})
