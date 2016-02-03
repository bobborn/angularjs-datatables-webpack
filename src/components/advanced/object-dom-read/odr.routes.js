/**
 * Created by bobtian on 16/2/3.
 */


function routes($stateProvider) {
    $stateProvider.state('objectDomRead', {
        url: '/object-dom-read',
        templateUrl: './components/advanced/object-dom-read/odr.tpl.html',
        controller: 'ObjectDomReadController',
        controllerAs: 'odr'
    })
}

routes.$inject = ['$stateProvider'];

export default routes;