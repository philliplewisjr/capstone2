app.controller("StudentCtrl", function($scope, studentFactory, studentClass, teacherFactory, studentProfile,  $location, $http) {


  console.log("studentProfile", studentProfile)
  $scope.studentProfile = studentProfile
  // var studentClass = studentClass.class
  $scope.studentClass
console.log("studentClass", studentClass)







var peoples = {
  them: [
  {name: 'Aemero', age: '7'},
  {name: 'Erica', age: '33'}
]
}
$scope.peoples
console.log(peoples)
var date = new Date()
console.log(date)
$scope.time = date








 //get teacher by id
 teacherFactory.getTeacherById()
 .then((data)=>{
  //  console.log(data.data)
   var teacher = data.data;
  //  console.log("teacher", teacher)
   $scope.teacher = data.data;
 })



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
 }

 $scope.addClass = ()=> {
   console.log("add class button clicked")
   $location.url("/addClass")
 }

})
