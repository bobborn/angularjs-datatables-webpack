/**
 * Created by bobtian on 16/2/3.
 */


function routes($stateProvider) {
    $stateProvider.state('dom', {
        url: '/dom',
        templateUrl: './components/basic/dom/dom.tpl.html',
        controller: 'DomController',
        controllerAs: 'dom'
    })
}

routes.$inject = ['$stateProvider'];

export default routes;