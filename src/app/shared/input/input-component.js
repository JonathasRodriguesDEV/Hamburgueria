angular.module('app').component('inputComponent', {
  bindings: {
    label: '@',
    type: '@',
    model: '='
  },
  templateUrl: 'components/input/input-component.html'
});
