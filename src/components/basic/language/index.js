/**
 * Created by bobtian on 16/2/3.
 */

import angular from 'angular';
import uiRouter from 'angular-ui-router';

import routes from './lang.routes.js';
import LanguageController from './lang.controller.js';


export default angular.module('app.components.basic.language', [uiRouter])
    .config(routes)
    .controller('LanguageController', LanguageController)
    .name;