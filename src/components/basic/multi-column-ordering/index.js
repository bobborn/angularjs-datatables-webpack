/**
 * Created by bob on 2016/1/22.
 */

import angular from 'angular';
import uiRouter from 'angular-ui-router';

import routes from './mco.routes.js';
import MultiColumnOrderingController from './mco.controller.js';


export default angular.module('app.components.basic.multi-column-ordering', [uiRouter])
    .config(routes)
    .controller('MultiColumnOrderingController', MultiColumnOrderingController)
    .name;