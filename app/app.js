let myApp = angular.module('myApp', [
  'ngRoute',
  'ngMessages',
  'vehicleDetail',
  'vehicleList',
  'cartForm',
  'ngMaterial'
]);

myApp.config([
  '$locationProvider',
  '$routeProvider',
  function config($locationProvider, $routeProvider) {
    $locationProvider.hashPrefix('!');

    $routeProvider
      .when('/vehicles', {
        template: '<vehicle-list></vehicle-list>'
      })
      .when('/vehicles/:vehicleId', {
        template: '<vehicle-detail></vehicle-detail>'
      })
      .when('/cartform', {
        template: '<cart-form state=vm.state></cart-form>'
      })
      .otherwise('/vehicles');
  }
]);

angular.module('myApp').component('myApp', {
  controllerAs: 'vm',

  controller: function myAppController($scope) {
    let vm = $scope;
  }
});
