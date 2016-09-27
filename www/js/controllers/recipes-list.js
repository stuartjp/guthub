angular.module('guthub.controllers', ['guthub.services'])

.controller('RecipesCtrl', function ($scope, Recipes) {
    $scope.recipes = Recipes.get();
})
