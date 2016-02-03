/**
 * Created by bobtian on 16/2/3.
 */



function routes($stateProvider) {
    $stateProvider.state('language', {
        url: '/language',
        templateUrl: './components/basic/language/lang.tpl.html',
        controller: 'LanguageController',
        controllerAs: 'lang'
    })
}

routes.$inject = ['$stateProvider'];

export default routes;