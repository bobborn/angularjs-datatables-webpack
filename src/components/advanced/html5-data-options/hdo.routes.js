/**
 * Created by bobtian on 16/2/3.
 */


function routes($stateProvider) {
    $stateProvider.state('html5DataOptions', {
        url: '/html5-data-options',
        templateUrl: './components/advanced/html5-data-options/hdo.tpl.html',
        controller: 'Html5DataOptionsController',
        controllerAs: 'hdo'
    })
}

routes.$inject = ['$stateProvider'];

export default routes;