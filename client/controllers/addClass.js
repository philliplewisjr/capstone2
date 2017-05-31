app.controller("AddClassCtrl", function($scope, teacherFactory, $http, studentProfile, studies, $location){
  console.log('Add class controller')

teacherFactory.getTeachers().then((data)=>{
  console.log(data.data)
  //remember to set your variable before scoping
  var teachers = data.data;
  console.log(teachers)
  $scope.teachers = teachers
})

//provides list of classes to take
var studies = studies;
console.log(studies)
$scope.studies = studies;

//used to pre populated student id input value
var studentProfile = studentProfile;
$scope.studentProfile = studentProfile;

console.log(studentProfile)



  $(document).ready(function() {
    $('select').material_select();
  });

  $scope.enroll = ()=> {
    console.log("newClass button pressed")
    if($scope.teacher_id > 2) {
      alert("Only teachers 1 or 2 are available")
    } else if ($scope.academic_id > 6) {
      alert("You must select a number 1 - 6")
    } else {
    let study = {
      student_id: $scope.studentProfile.id,
      teacher_id: $scope.teacher_id,
      academic_id: $scope.academic_id
    }
    console.log(study)
    $http.post(`http://localhost:5000/api/v1/class`, study)
    .then((data)=>{
      console.log(data)
      $http.get(`http://localhost:5000/api/v1/class`)
      .then((data)=> {
        console.log(data.data)
      })
      $location.url(`/student/${studentProfile.id}`)
    })
  }
  }

})
