/**
 * Created by bobtian on 16/2/3.
 */


function routes($stateProvider) {
    $stateProvider.state('multiTables', {
        url: '/multi-tables',
        templateUrl: './components/multi-tables/mt.tpl.html',
        controller: 'MultiTablesController',
        controllerAs: 'mt'
    })
}

routes.$inject = ['$stateProvider'];

export default routes;