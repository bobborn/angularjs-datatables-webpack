/**
 * Created by bobtian on 16/2/3.
 */

function routes($stateProvider) {
    $stateProvider.state('scrollXY', {
        url: '/scroll-x',
        templateUrl: './components/basic/scroll-xy/sxy.tpl.html',
        controller: 'ScrollXYController',
        controllerAs: 'sxy'
    })
}

routes.$inject = ['$stateProvider'];

export default routes;