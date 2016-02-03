/**
 * Created by bobtian on 16/2/3.
 */


function routes($stateProvider) {
    $stateProvider.state('defaults', {
        url: '/defaults',
        templateUrl: './components/advanced/defaults/d.tpl.html',
        controller: 'DefaultsController',
        controllerAs: 'd'
    })
}

routes.$inject = ['$stateProvider'];

export default routes;