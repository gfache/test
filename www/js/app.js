angular.module('ionicApp', ['ionic'])
  
 .controller('AppCtrl', function() {
 	/*test OK*/
  ionic.Platform.ready(function() {
    navigator.splashscreen.hide();
  });

 });
              
              