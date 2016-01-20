/**
 * Created by bob on 2016/1/20.
 */


function routes($stateProvider) {
    $stateProvider.state('zeroConfiguration', {
        url: '/zero-config',
        templateUrl: './components/zero-configuration/zc.tpl.html',
        controller: 'ZeroConfigurationController',
        controllerAs: 'zc'
    })
}

routes.$inject = ['$stateProvider'];

export default routes;