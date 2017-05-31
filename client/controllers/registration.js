app.controller("RegisterCtrl", function($scope, $location){
  console.log("registration controller")

  //register button
  $scope.register = function() {
    console.log("login button")
  $(".navRegister").addClass("ng-hide")
  $(".navLogin").addClass("ng-hide")
  $(".navLogout").removeClass("ng-hide")

  }

  //cancel registration button
  $scope.cancel = function () {
    console.log("cancel button clicked")
    $location.url("/")
  }
})
