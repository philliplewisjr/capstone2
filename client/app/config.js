console.log("config app")

app.config(function($routeProvider, $locationProvider){
  $locationProvider.hashPrefix('');

  $routeProvider
  .when("/", {
    controller: "HomeCtrl",
    templateUrl: "partials/home.html"
  })
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
