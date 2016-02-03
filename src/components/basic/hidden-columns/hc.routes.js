/**
 * Created by bobtian on 16/2/3.
 */


function routes($stateProvider) {
    $stateProvider.state('hiddenColumns', {
        url: '/hidden-columns',
        templateUrl: './components/basic/hidden-columns/hc.tpl.html',
        controller: 'HiddenColumnsController',
        controllerAs: 'hc'
    })
}

routes.$inject = ['$stateProvider'];

export default routes;