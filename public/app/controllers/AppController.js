app.controller("AppController", function ($scope, $rootScope, $routeParams, $window, $resource, $modal, $translate) {
    $scope.version = "1.0.1";
    $scope.form = {};

    $scope.loggedUser = {
        idCustomer: 1,
        idUser: 2,
        name: 'Dilson Sordi Junior',
        mail: 'juniorsordi@gmail.com',
        accessLevel: 'Administrador',
        photo: 'uploads/photos/64d64b2b3369ff506206a0ae1f206ab3171d1afe.png?1561438316'
    };

});