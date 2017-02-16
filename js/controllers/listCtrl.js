(function(){
	angular
		.module('quiz')
		.controller('listCtrl', function($scope, $http){
			
			$scope.selectedHero = {};
			$scope.currentHero = function(hero){
				$scope.selectedHero = hero;
			};
			
			$http.get('js/heroes.json')
					.then(function(response){
						$scope.heroes = response.data;
			});
		});
})();

//using comicvine : http://comicvine.gamespot.com/api/characters/?api_key=82077fbf4a0ee55254ef81734d62a2abd9c42176&name=batman&format=json