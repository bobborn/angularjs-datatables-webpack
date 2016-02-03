/**
 * Created by bob on 2016/1/22.
 */


function routes($stateProvider) {
    $stateProvider.state('multiColumnOrdering', {
        url: '/multi-column-ordering',
        templateUrl: './components/basic/multi-column-ordering/mco.tpl.html',
        controller: 'MultiColumnOrderingController',
        controllerAs: 'mco'
    })
}

routes.$inject = ['$stateProvider'];

export default routes;