app.controller("ClassPageCtrl", function($scope, $location, studentFactory, $http){
  console.log("class page controller")

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
  //add student
  $scope.addStudent = function() {
    console.log("student")
    $('.modal2').modal({
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
      complete: function() { alert('Closed'); } // Callback for Modal close
    }
  );
  }

})
