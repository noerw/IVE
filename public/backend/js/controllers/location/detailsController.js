var app = angular.module("ive");

// Location details controller
app.controller("locationDetailsController", function($scope, $rootScope, $routeParams, $translate, $location, config, $window, $authenticationService, $locationService, $videoService, $overlayService) {

    /*************************************************
        FUNCTIONS
     *************************************************/

    /**
     * [changeTab description]
     * @param  {[type]} tab [description]
     * @return {[type]}     [description]
     */
    $scope.changeTab = function(tab){
        $scope.tab = tab;
    };

    /**
     * [redirect description]
     * @param  {[type]} path [description]
     * @return {[type]}      [description]
     */
    $scope.redirect = function(path){
        $location.url(path);
    };

    /**
     * [cancel description]
     * @return {[type]} [description]
     */
    $scope.cancel = function(){
        if($authenticationService.get()){
            $scope.redirect("/locations");
        } else {
            $scope.redirect("/");
        }
    };

    /**
     * [toggle description]
     * @param  {[type]} item [description]
     * @return {[type]}      [description]
     */
    $scope.toggle = function(item){
        switch (item) {
            case 'connectedLocations': {
                $scope.connectedLocations = !$scope.connectedLocations;
                break;
            }
        }
    };

    /*************************************************
        INIT
     *************************************************/
    $scope.changeTab(0);
    $scope.connectedLocations = false;


    // Load location
    $locationService.retrieve($routeParams.location_id)
    .then(function onSuccess(response) {
        $scope.location = response.data;
        $scope.changeTab(1);

        // Load connected locations
        $locationService.list_by_location($scope.location.location_id)
        .then(function onSuccess(response) {
            console.log(response.data);
            $scope.location.connected_locations = response.data;
        })
        .catch(function onError(response) {
            $window.alert(response.data);
        });

        // Load related videos
        /*$videoService.list_by_location($scope.location.location_id)
        .then(function onSuccess(response) {
            $scope.location.videos = response.data;
        })
        .catch(function onError(response) {
            $window.alert(response.data);
        });*/

    })
    .catch(function onError(response) {
        $window.alert(response.data);
    });

});