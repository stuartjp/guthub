angular.module('guthub.controllers')

// excluded the dependancy on guthub.services on tester1. Had it spelt wrong here so check it out
//angular.module('guthub.controllers')

.controller('FavouritesCtrl', function ($scope, Favourites) {
    $scope.favourites = Favourites.get();

    $scope.removeFavourite = function (recipe) {
        Favourites.remove(recipe);
    }
})