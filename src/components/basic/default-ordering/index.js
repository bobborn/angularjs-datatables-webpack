/**
 * Created by bob on 2016/1/20.
 */

import angular from 'angular';
import uiRouter from 'angular-ui-router';

import routes from './do.routes.js';
import DefaultOrderingController from './do.controller.js';


export default angular.module('app.components.basic.default-ordering', [uiRouter])
    .config(routes)
    .controller('DefaultOrderingController', DefaultOrderingController)
    .name;