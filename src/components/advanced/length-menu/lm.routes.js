/**
 * Created by bobtian on 16/2/3.
 */

function routes($stateProvider) {
    $stateProvider.state('lengthMenu', {
        url: '/length-menu',
        templateUrl: './components/advanced/length-menu/lm.tpl.html',
        controller: 'LengthMenuController',
        controllerAs: 'lm'
    })
}

routes.$inject = ['$stateProvider'];

export default routes;