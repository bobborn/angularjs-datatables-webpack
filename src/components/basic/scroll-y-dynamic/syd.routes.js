/**
 * Created by bobtian on 16/2/3.
 */

function routes($stateProvider) {
    $stateProvider.state('scrollYDynamic', {
        url: '/scroll-y-dynamic',
        templateUrl: './components/basic/scroll-y-dynamic/syd.tpl.html',
        controller: 'ScrollYDynamicController',
        controllerAs: 'syd'
    })
}

routes.$inject = ['$stateProvider'];

export default routes;