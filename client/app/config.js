console.log("config app")

app.config(function($routeProvide, $locationProvider){
  $locationProvide.hashPrefix('');

  $routeProvider
  .when("/login", {
    controller: "LoginCtrl",
    templateUrl: "partials/login.html"
  })
  .when("/register", {
    controller: "RegisterCtrl",
    templateUrl: "partials/registration.html"
  })
  .when("/student", {
    controller: "StudentCtrl",
    templateUrl: "partials/studentProfile.html"
  })
  .when("/parentProfile", {
    controller: "ParentCtrl",
    templateUrl: "partials/parentProfile.html"
  })
})
