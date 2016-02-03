/**
 * Created by bobtian on 16/2/3.
 */


import angular from 'angular';
import uiRouter from 'angular-ui-router';

import routes from './lf.routes.js';
import LanguageFileController from './lf.controller.js';


export default angular.module('app.components.advanced.language-file', [uiRouter])
    .config(routes)
    .controller('LanguageFileController', LanguageFileController)
    .name;