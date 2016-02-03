/**
 * Created by bobtian on 16/2/3.
 */

import angular from 'angular';
import uiRouter from 'angular-ui-router';

import routes from './sx.routes.js';
import ScrollXController from './sx.controller.js';


export default angular.module('app.components.basic.scroll-x', [uiRouter])
    .config(routes)
    .controller('ScrollXController',ScrollXController)
    .name;