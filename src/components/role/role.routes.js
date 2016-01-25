/**
 * Created by bob on 2016/1/20.
 */


function routes($stateProvider) {
    $stateProvider.state('role', {
        url: '/role',
        templateUrl: './components/role/role.list.tpl.html',
        controller: 'RoleListController',
        controllerAs: 'roleList'
    });
}

routes.$inject = ['$stateProvider'];

export default routes;
