/**
 * Created by bobtian on 16/2/3.
 */

import angular from 'angular';
import uiRouter from 'angular-ui-router';

import routes from './syd.routes.js';
import ScrollYDynamicController from './syd.controller.js';


export default angular.module('app.components.basic.scroll-y-dynamic', [uiRouter])
    .config(routes)
    .controller('ScrollYDynamicController',ScrollYDynamicController)
    .name;