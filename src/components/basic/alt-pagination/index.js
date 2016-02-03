/**
 * Created by bobtian on 16/2/3.
 */

import angular from 'angular';
import uiRouter from 'angular-ui-router';

import routes from './ap.routes.js';
import AltPaginationController from './ap.controller.js';


export default angular.module('app.components.basic.alt-pagination', [uiRouter])
    .config(routes)
    .controller('AltPaginationController', AltPaginationController)
    .name;