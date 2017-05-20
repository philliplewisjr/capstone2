app.controller("StudentCtrl", function($scope, studentFactory, $location) {
  console.log("student controller")
  // console.log(studentFactory.getData())
  studentFactory.getData()
  .then((data)=>{
    console.log("data", data)
  })
  .catch((err)=>{
    console.log(err)
  })
})
