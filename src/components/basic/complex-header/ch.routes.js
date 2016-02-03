/**
 * Created by bobtian on 16/2/3.
 */



function routes($stateProvider) {
    $stateProvider.state('complexHeader', {
        url: '/complex-header',
        templateUrl: './components/basic/complex-header/ch.tpl.html',
        controller: 'ComplexHeaderController',
        controllerAs: 'ch'
    })
}

routes.$inject = ['$stateProvider'];

export default routes;