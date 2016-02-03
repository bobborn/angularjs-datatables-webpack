/**
 * Created by bobtian on 16/2/3.
 */

import angular from 'angular';
import uiRouter from 'angular-ui-router';

import routes from './sy.routes.js';
import ScrollYController from './sy.controller.js';


export default angular.module('app.components.basic.scroll-y', [uiRouter])
    .config(routes)
    .controller('ScrollYController',ScrollYController)
    .name;