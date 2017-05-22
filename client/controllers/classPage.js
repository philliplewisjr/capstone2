app.controller("ClassPageCtrl", function($scope, $location, studentFactory){
  console.log("class page controller")

  //get all students
  studentFactory.getData()
  .then((data)=>{
    console.log("data", data)
  })
  .catch((err)=>{
    console.log(err)
  })
})
