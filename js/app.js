var app = angular.module('deviceTracker', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('/home');
    
    $stateProvider
        
        // HOME STATES AND NESTED VIEWS ========================================
        .state('home', {
            url: '/home',
            templateUrl: 'home.html'
        })
        
        // ABOUT PAGE AND MULTIPLE NAMED VIEWS =================================
        .state('devices', {
            // we'll get to this in a bit 
            url: '/listdevices',
            templateUrl: 'home.html'      
        })
        //fetch stationary devices state
        .state('StationaryDevices', {
            // we'll get to this in a bit 
            url: '/fetchstationarydevices',
            templateUrl: 'home.html'      
        })
        //fetch overspeeding devices state
        .state('OverSpeedingDevices', {
            // we'll get to this in a bit 
            url: '/fetchoverspeedingdevices',
            templateUrl: 'home.html'      
        })
        //Geo dwell
        .state('Geodwell', {
            // we'll get to this in a bit 
            url: '/geodwell',
            templateUrl: 'home.html'      
        })
        //SystemHealth
        .state('SystemHealth', {
            // we'll get to this in a bit 
            url: '/systemhealth',
            templateUrl: 'home.html'      
        })
        //DevicePositions
        .state('DevicePositions', {
            // we'll get to this in a bit 
            url: '/devicepositions',
            templateUrl: 'home.html'      
        });

        
});