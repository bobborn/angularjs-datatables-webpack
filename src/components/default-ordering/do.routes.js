/**
 * Created by bob on 2016/1/20.
 */

function routes($stateProvider) {
    $stateProvider.state('defaultOrdering', {
        url: '/default-ordering',
        templateUrl: './components/default-ordering/do.tpl.html',
        controller: 'DefaultOrderingController',
        controllerAs: 'do'
    })
}

routes.$inject = ['$stateProvider'];

export default routes;