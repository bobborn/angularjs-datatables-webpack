/**
 * Created by bobtian on 16/2/3.
 */


function routes($stateProvider) {
    $stateProvider.state('languageFile', {
        url: '/language-file',
        templateUrl: './components/advanced/language-file/lf.tpl.html',
        controller: 'LanguageFileController',
        controllerAs: 'lf'
    })
}

routes.$inject = ['$stateProvider'];

export default routes;