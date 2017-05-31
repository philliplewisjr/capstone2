app.controller("StudentCtrl", function($scope, studentFactory, studentClass, teacherFactory, studentProfile, classFactory, $timeout,  $location, $http) {


  console.log("studentProfile", studentProfile)
  //loads student's profile when page loads
  $scope.studentProfile = studentProfile
  console.log("studentClass", studentClass)
  //loads student's data when page loads
  $scope.studentClass = studentClass


 //get teacher by id
 teacherFactory.getTeacherById()
 .then((data)=>{
  //  console.log(data.data)
   var teacher = data.data;
  //  console.log("teacher", teacher)
   $scope.teacher = data.data;
 })

//opens modal to update student info
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

//post updated student data
 $scope.updateStudent = (id)=> {
   console.log(id)
   let studentData ={
     firstname: $scope.firstName,
     lastname: $scope.lastName,
     picture: $scope.pictureUrl,
     grade: $scope.grade,
     parent: $scope.parent,
     phone: $scope.phone,
     gender: $scope.gender
   }
   console.log(studentData)
   //always send the actual variable without brackets
   //if brackets are around the object it will not post to database
   $http.patch(`http://localhost:5000/api/v1/students/${id}`, studentData)
   .then((data)=>{
     console.log(data)
     $http.get(`http://localhost:5000/api/v1/students/${id}`)
     .then((data)=>{
       console.log(data.data)
       $scope.student = data.data;
     })
     .catch((err)=>{
       console.log(err)
     })
   })
   $('.modal').modal('close');
 }

 //navigates to the add class page
 $scope.addClass = ()=> {
   console.log("add class button clicked")
   $location.url("/addClass")
 }

 //delete class from student profile button
 $scope.removeClass = (id)=> {
   console.log("update class button", id)
   $http.delete(`http://localhost:5000/api/v1/class/${id}`)
   .then((data)=>{
     console.log(data)
   })
   .catch((err)=>{
     console.log(err)
   })

 }


})
