var phonecatApp = angular.module('phonecatApp', []);
phonecatApp.config(function($interpolateProvider) {
	$interpolateProvider.startSymbol('[[');
	$interpolateProvider.endSymbol(']]');
});

phonecatApp.controller('PhoneListCtrl', function ($scope) {
  $scope.phones = [
    {'name': 'Nexus S',
     'snippet': 'Fast just got faster with Nexus S.'},
    {'name': 'Motorola XOOM™ with Wi-Fi',
     'snippet': 'The Next, Next Generation tablet.'},
    {'name': 'MOTOROLA XOOM™',
     'snippet': 'The Next, Next Generation tablet.'}
  ];
  var time = new Date();
  $scope.time = time.toLocaleTimeString() + " @ " + time.toLocaleDateString();
});

var myCanvas = document.getElementById('myCanvas');
var ctx = myCanvas.getContext("2d");
ctx.fillStyle = "green";
ctx.fillRect(00, 0, 80, 700);
console.log(333);