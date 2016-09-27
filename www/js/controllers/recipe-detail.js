angular.module('guthub.controllers')

.controller('RecipesDetailCtrl', function ($scope, $stateParams, Recipes, Favourites) {
    //console.log($stateParams.recipe_id);
    $scope.recipe = Recipes.get($stateParams.recipe_id);

    console.log('$scope.favourites 1:' + $scope.favourites);
    $scope.favourites = Favourites.get();
    console.log('$scope.favourites 2:' + $scope.favourites)

    $scope.addFavourite = function () {
        //console.log('$scope.favourites 3:' + $scope.favourites)
        Favourites.add($scope.recipe);
        //console.log('$scope.favourites 4:' + $scope.favourites)
    };

    $scope.removeFavourite = function () {
        //console.log('$scope.favourites 5:' + $scope.favourites)
        Favourites.remove($scope.recipe);
        //console.log('$scope.favourites 6:' + $scope.favourites)
    };
})