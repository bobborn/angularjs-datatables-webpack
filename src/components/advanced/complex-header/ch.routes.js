/**
 * Created by bobtian on 16/2/3.
 */

function routes($stateProvider) {
    $stateProvider.state('advancedComplexHeader', {
        url: '/advanced-complex-header',
        templateUrl: './components/advanced/complex-header/ch.tpl.html',
        controller: 'ComplexHeaderController',
        controllerAs: 'ch'
    })
}

routes.$inject = ['$stateProvider'];

export default routes;