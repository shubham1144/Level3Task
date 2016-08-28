//Create controllers to be used in the application
app.controller("devicetrackController", function($scope, $http) {
    $scope.testString = 'Welcome to angular.js application ..inprogress basic structure';
    $scope.deviceList = [];
	//Send a request to server to get list of devices connected
	$scope.getDevicelist = function(){
    console.log('Trying to connect to node.js server');
		$http.get('http://localhost:8080/tracker/listDevicesOnSystem')
        .success(function(data) {
            $scope.deviceList = data;
            console.log(data);
        })
        .error(function(data) {
            console.log('Error: ' + data);
        });
	};

});