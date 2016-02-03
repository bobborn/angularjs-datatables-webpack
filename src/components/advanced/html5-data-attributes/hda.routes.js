/**
 * Created by bobtian on 16/2/3.
 */


function routes($stateProvider) {
    $stateProvider.state('html5DataAttributes', {
        url: '/html5-data-attrs',
        templateUrl: './components/advanced/html5-data-attributes/hda.tpl.html',
        controller: 'Html5DataAttrsController',
        controllerAs: 'hda'
    })
}

routes.$inject = ['$stateProvider'];

export default routes;