/**
 * Created by bobtian on 16/2/3.
 */


function routes($stateProvider) {
    $stateProvider.state('eventsLive', {
        url: '/events-live',
        templateUrl: './components/advanced/events-live/el.tpl.html',
        controller: 'EventsLiveController',
        controllerAs: 'el'
    })
}

routes.$inject = ['$stateProvider'];

export default routes;