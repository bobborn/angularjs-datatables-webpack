/**
 * Created by bobtian on 16/2/3.
 */

function routes($stateProvider) {
    $stateProvider.state('domMultipleElements', {
        url: '/dom-multi-elements',
        templateUrl: './components/advanced/dom-multiple-elements/dme.tpl.html',
        controller: 'DomMultipleElementsController',
        controllerAs: 'dme'
    })
}

routes.$inject = ['$stateProvider'];

export default routes;