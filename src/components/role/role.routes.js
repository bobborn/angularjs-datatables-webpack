/**
 * Created by bob on 2016/1/20.
 */

function routes($stateProvider){
    $stateProvider.state('roleListController', {
        url: '/role-list',
        templateUrl: './components/role/role.tpl.html',
        controller: 'RoleListController',
        controllerAs: 'rl'
    })
}

routes.$inject=['$stateProvider'];

export default routes;
