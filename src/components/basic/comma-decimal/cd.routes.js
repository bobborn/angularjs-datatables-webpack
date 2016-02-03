/**
 * Created by bobtian on 16/2/3.
 */

function routes($stateProvider) {
    $stateProvider.state('commaDecimal', {
        url: '/comma-decimal',
        templateUrl: './components/basic/comma-decimal/cd.tpl.html',
        controller: 'CommaDecimalController',
        controllerAs: 'cd'
    })
}

routes.$inject = ['$stateProvider'];

export default routes;