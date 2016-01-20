/**
 * Created by bob on 2016/1/20.
 */


function routes($urlRouterProvider, $locationProvider, $stateProvider) {

    // $locationProvider.html5Mode(true);
    $urlRouterProvider.otherwise('/');

}

routes.$inject = ['$urlRouterProvider', '$locationProvider', '$stateProvider'];

export default routes;

