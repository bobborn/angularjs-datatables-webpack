/**
 * Created by bobtian on 16/2/3.
 */


import angular from 'angular';
import uiRouter from 'angular-ui-router';

import routes from './lm.routes.js';
import LengthMenuController from './lm.controller.js';


export default angular.module('app.components.advanced.length-menu', [uiRouter])
    .config(routes)
    .controller('LengthMenuController', LengthMenuController)
    .name;