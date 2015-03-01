var app = angular.module('app',['ngRoute']);

app.config(function($routeProvider){
	$routeProvider.when("/", {
		templateUrl: "templates/index.html",
		controller: "IndexCtrl"
	})
	.when("/newcard", {
		templateUrl: "templates/newcard.html",
		controller: "NewCardCtrl"
	});
});

app.controller('HeaderController', ['$scope', function($scope) {

}]);

app.controller("IndexCtrl", function($scope){

});

app.controller("NewCardCtrl", function($scope){

});

function HeaderController($scope, $location) 
{ 
	$scope.isActive = function (viewLocation) { 
		return viewLocation === $location.path();
	};
}