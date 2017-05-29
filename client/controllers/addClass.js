app.controller("AddClassCtrl", function($scope, teacherFactory, $http, $location){
  console.log('Add class controller')

teacherFactory.getTeachers().then((data)=>{
  console.log(data.data)
  var teachers = data.data;
  console.log(teachers)
})

$scope.teachers

  $(document).ready(function() {
    $('select').material_select();
  });

  $scope.newClass = ()=> {
    console.log("newClass button pressed")
    console.log($scope.teacher1)
  }

})
