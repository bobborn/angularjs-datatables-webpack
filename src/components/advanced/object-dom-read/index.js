/**
 * Created by bobtian on 16/2/3.
 */


import angular from 'angular';
import uiRouter from 'angular-ui-router';

import routes from './odr.routes.js';
import ObjectDomReadController from './odr.controller.js';


export default angular.module('app.components.advanced.object-dom-read', [uiRouter])
    .config(routes)
    .controller('ObjectDomReadController', ObjectDomReadController)
    .name;