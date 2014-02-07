var modules = angular.module( "modules", ["ui.router", "xeditable"] );

modules.config(["$stateProvider", "$urlRouterProvider", function ($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.when('', '/users');
	$stateProvider.state('users', {
		url: "/users",
		templateUrl: "app/views/users/users.html"
	}).state('projects', {
		url: "/projects",
		templateUrl: "app/views/projects/projects.html"
	}).state('tasks', {
		url: "tasks",
		templateUrl: "app/views/tasks/tasks.html"
	})
}]);