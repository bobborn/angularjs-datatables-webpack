/**
 * Created by bobtian on 16/2/3.
 */

function routes($stateProvider) {
    $stateProvider.state('dtEvents', {
        url: '/dt-events',
        templateUrl: './components/advanced/dt-events/de.tpl.html',
        controller: 'DtEventsController',
        controllerAs: 'de'
    })
}

routes.$inject = ['$stateProvider'];

export default routes;