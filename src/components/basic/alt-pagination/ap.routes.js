/**
 * Created by bobtian on 16/2/3.
 */

function routes($stateProvider) {
    $stateProvider.state('altPagination', {
        url: '/alt-pagination',
        templateUrl: './components/basic/alt-pagination/ap.tpl.html',
        controller: 'AltPaginationController',
        controllerAs: 'ap'
    })
}

routes.$inject = ['$stateProvider'];

export default routes;