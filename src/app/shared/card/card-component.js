angular.module('app').component('cardComponent', {
  bindings: {
    image: '@',
    title: '@',
    description: '@',
    action: '&'
  },
  templateUrl: 'components/card/card-component.html'
});
