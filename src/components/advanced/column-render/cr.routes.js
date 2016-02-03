/**
 * Created by bobtian on 16/2/3.
 */

function routes($stateProvider) {
    $stateProvider.state('columnRender', {
        url: '/column-render',
        templateUrl: './components/advanced/column-render/cr.tpl.html',
        controller: 'ColumnRenderController',
        controllerAs: 'cr'
    })
}

routes.$inject = ['$stateProvider'];

export default routes;