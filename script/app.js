var app = angular.module('app',['ngRoute']);

app.config(function($routeProvider){
	$routeProvider
	.when("/", {
		templateUrl: "templates/index.html",
		controller: "IndexCtrl"
	})
	.when("/newcard", {
		templateUrl: "templates/newcard.html",
		controller: "NewCardCtrl"
	})
	.when("/testcard", {
		templateUrl: "templates/testcard.html",
		controller: "TestCardCtrl"
	});
});

app.controller('HeaderController', ['$scope', function($scope) {

}]);

app.controller("IndexCtrl", function($scope){

});

app.controller("NewCardCtrl", function($scope){

	$scope.flashcard = {};

	var flashcard = $scope.flashcard;

	flashcard.name = "";
	flashcard.words = [];

	var addWord = function(word, translation) {
		if (word == undefined ) word = "";
		if (translation == undefined) translation = "";
		flashcard.words.push({
			"word" : word,
			"translation" : translation
		});
	}
	var setFlashcard = function() {
		addWord("hello", "bonjour");
		addWord();
	}
	setFlashcard();

	flashcard.moreLines = function() {
		if (flashcard.words[flashcard.words.length-1].word != undefined && flashcard.words[flashcard.words.length-1].word != "") {
			addWord();
		}
	}

	flashcard.save = function() {
		flashcard.words.pop();
		console.log(flashcard);
	}
});

app.controller("TestCardCtrl", function($scope){

});

function HeaderController($scope, $location) 
{ 
	$scope.isActive = function (viewLocation) { 
		return viewLocation === $location.path();
	};
}