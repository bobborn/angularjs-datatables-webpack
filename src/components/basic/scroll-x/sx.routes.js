/**
 * Created by bobtian on 16/2/3.
 */

function routes($stateProvider) {
    $stateProvider.state('scrollX', {
        url: '/scroll-x',
        templateUrl: './components/basic/scroll-x/sx.tpl.html',
        controller: 'ScrollXController',
        controllerAs: 'sx'
    })
}

routes.$inject = ['$stateProvider'];

export default routes;