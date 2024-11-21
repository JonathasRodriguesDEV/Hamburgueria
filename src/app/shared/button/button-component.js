angular.module('app').component('buttonComponent', {
  bindings: {
    label: '@',
    onClick: '&',
    secondary: '<'
  },
  templateUrl: 'components/button/button-component.html'
});
