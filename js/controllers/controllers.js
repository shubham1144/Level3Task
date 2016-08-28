//Create controllers to be used in the application
app.controller("devicetrackController", function($scope, $http) {
    $scope.testString = 'Welcome to angular.js application ..inprogress basic structure';
    $scope.deviceList = [];
	//Send a request to server to get list of devices connected
	$scope.getDevicelist = function(){
    console.log('Trying to connect to node.js server');
		$http.get('/tracker/listDevicesOnSystem')
        .success(function(data) {
            $scope.deviceList = data;
            //console.log(data);
        })
        .error(function(data) {
            console.log('Error: ' + data);
        });
	};

	
});

//Controller for handling request with starttime and stoptime
app.controller("OverSpeedingController", function($scope, $http) {
    $scope.TimeRange = {};
    $scope.stationarydeviceList = {};
    $scope.overspeedingdevicelist = [];
    $scope.inrangedevices = [];

    //Send a request to server to get list of stationary devices
    $scope.getStationaryDevicelist = function(){
    //console.log('Trying to connect to node.js server');
        $http.post('/tracker/getstationaryDevices',$scope.TimeRange)
        .success(function(data) {
            $scope.stationarydeviceList = data;
            //console.log(data);
        })
        .error(function(data) {
            console.log('Error: ' + data);
        });
    };


//Send a request to server to get list of stationary devices
    $scope.getOverSpeedingDevicelist = function(){
        console.log('The starttime is : ' +  $scope.TimeRange.starttime);
    //console.log('Trying to connect to node.js server');
        $http.post('/tracker/getOverSpeedingDevices',$scope.TimeRange)
        .success(function(data) {
            $scope.overspeedingdevicelist = data;
            //console.log(data);
        })
        .error(function(data) {
            console.log('Error: ' + data);
        });
    };

//Send a request to server to for geo dwell
    $scope.getgeodwellList = function(){
        console.log('The starttime is : ' +  $scope.TimeRange.starttime);
    //console.log('Trying to connect to node.js server');
    //console.log('The starttime being sent is :' + $scope.starttime);
        $http.post('/tracker/GeoDwell',$scope.TimeRange)
        .success(function(data) {
            $scope.inrangedevices = data;
            //console.log(data);
        })
        .error(function(data) {
            console.log('Error: ' + data);
        });
    };   
    //Send a request to obtain CPU utilization %
    $scope.getutilizationEfficiency = function(){
    //console.log('The starttime is : ' +  $scope.TimeRange.starttime);
    //console.log('Trying to connect to node.js server');
    //console.log('The starttime being sent is :' + $scope.starttime);
        $http.post('/tracker/fetchLocalSysHealth',$scope.TimeRange)
        .success(function(data) {
            $scope.Utilization = data;
            //console.log(data);
        })
        .error(function(data) {
            console.log('Error: ' + data);
        });
    }; 
     //Send a request to obtain CPU utilization %
    $scope.getDevicePositions = function(){
    //console.log('The starttime is : ' +  $scope.TimeRange.starttime);
    //console.log('Trying to connect to node.js server');
    //console.log('The starttime being sent is :' + $scope.starttime);
        $http.post('/tracker/getDevicePositions',$scope.TimeRange)
        .success(function(data) {
            $scope.DeviceData = data;
            //console.log(data);
        })
        .error(function(data) {
            console.log('Error: ' + data);
        });
    }; 
});
