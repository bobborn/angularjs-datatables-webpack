/**
 * Created by bob on 2016/1/20.
 */

function routes($stateProvider) {
    $stateProvider.state('featureEnableDisable', {
        url: '/feature-enable-disable',
        templateUrl: './components/feature-enable-disable/fed.tpl.html',
        controller: 'FeatureEnableDisableController',
        controllerAs: 'fed'
    })
}

routes.$inject = ['$stateProvider'];

export default routes;