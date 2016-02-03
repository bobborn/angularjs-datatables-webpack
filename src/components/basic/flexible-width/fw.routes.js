/**
 * Created by bobtian on 16/2/3.
 */



function routes($stateProvider) {
    $stateProvider.state('flexibleWidth', {
        url: '/flexible-width',
        templateUrl: './components/basic/flexible-width/fw.tpl.html',
        controller: 'FlexibleWidthController',
        controllerAs: 'fw'
    })
}

routes.$inject = ['$stateProvider'];

export default routes;