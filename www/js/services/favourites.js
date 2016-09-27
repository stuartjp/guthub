angular.module('guthub.services')

.factory('Favourites', function ($localstorage) {
    var stored = $localstorage.get('favourites');
    var favourites = stored ? JSON.parse(stored) : [];

    return {
        add: function (recipe) {
            recipe.addedToFavourites = true;
            // with any alert it all works fine. Why? button doubleclick error
            //alert('add: ' + JSON.stringify(favourites))
            //alert('berk')
            favourites.push(recipe);
            $localstorage.set('favourites', JSON.stringify(favourites));
            //return recipe;
        },

        remove: function (recipe) {
            favourites.splice(favourites.indexOf(recipe), 1);
            recipe.addedToFavourites = false;

            $localstorage.set('favourites', JSON.stringify(favourites));
            //return recipe;
        },

        get: function (id) {
            if (id) {
                for (var i = 0; 1 < favourites.length; i++) {
                    if (favourites[i].recipe_id == id) {
                        return favourites[i];
                    }
                }
                return null;
            }
            else {
                return favourites;
            }
        }
    };

});
