/**
 * Created by bobtian on 16/2/3.
 */



function routes($stateProvider) {
    $stateProvider.state('stateSave', {
        url: '/state-save',
        templateUrl: './components/basic/state-save/ss.tpl.html',
        controller: 'StateSaveController',
        controllerAs: 'ss'
    })
}

routes.$inject = ['$stateProvider'];

export default routes;