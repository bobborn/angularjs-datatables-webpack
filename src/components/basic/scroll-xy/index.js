/**
 * Created by bobtian on 16/2/3.
 */


import angular from 'angular';
import uiRouter from 'angular-ui-router';

import routes from './sxy.routes.js';
import ScrollXYController from './sxy.controller.js';


export default angular.module('app.components.basic.scroll-xy', [uiRouter])
    .config(routes)
    .controller('ScrollXYController',ScrollXYController)
    .name;