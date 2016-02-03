/**
 * Created by bobtian on 16/2/3.
 */


import angular from 'angular';
import uiRouter from 'angular-ui-router';

import routes from './d.routes.js';
import DefaultsController from './d.controller.js';


export default angular.module('app.components.advanced.defaults', [uiRouter])
    .config(routes)
    .controller('DefaultsController', DefaultsController)
    .name;