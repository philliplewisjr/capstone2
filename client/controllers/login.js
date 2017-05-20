// console.log("LoginCtrl")

app.controller("LoginCtrl", function($scope, $location){
  console.log("login controller")

//login button
$scope.login = function() {
  console.log("login button")
$(".navLogin").addClass("ng-hide")
$(".navRegister").addClass("ng-hide")
$(".navLogout").removeClass("ng-hide")

}

//cancel needs to take you back to the home page
//need to fix, make home page
$scope.cancel = function() {
  console.log("cancel button")
  $(".navLogout").addClass("ng-hide")
  $(".navLogin").removeClass("ng-hide")
  $location.url()
}



})
