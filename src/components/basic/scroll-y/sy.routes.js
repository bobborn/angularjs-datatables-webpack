/**
 * Created by bobtian on 16/2/3.
 */

function routes($stateProvider) {
    $stateProvider.state('scrollY', {
        url: '/scroll-y',
        templateUrl: './components/basic/scroll-y/sy.tpl.html',
        controller: 'ScrollYController',
        controllerAs: 'sy'
    })
}

routes.$inject = ['$stateProvider'];

export default routes;