

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
  .when("/student/:id", {
    controller: "StudentCtrl",
    templateUrl: "partials/studentProfile.html",
    resolve: {
      studentProfile: function (studentFactory, $route, $location) {
        const id = $route.current.params.id
          return studentFactory.getStudent(id);
      }
    }

  })
  .when("/class", {
    controller: "ClassPageCtrl",
    templateUrl: "partials/classPage.html"
    // resolve: {
    //   studentId: function (studentFactory, $route, $location ) {
    //     const id = $route.current.params.id
    //     return studentFactory.getStudent(id)
    //   }
    // }
  })
  .when("/parentProfile", {
    controller: "ParentCtrl",
    templateUrl: "partials/parentProfile.html"
  })
  .when("/addstudent", {
    controller: "AddStudentCtrl",
    templateUrl: "partials/addStudent.html"
  })
  .when("/addClass", {
    controller: "AddClassCtrl",
    templateUrl: "partials/addClass.html"
  })
})
