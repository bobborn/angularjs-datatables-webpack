/**
 * Created by bob on 2016/1/20.
 */


import angular from 'angular';
import uiRouter from 'angular-ui-router';

import routes from './zc.routes.js';
import ZCController from './zc.controller.js';


export default angular.module('app.components.basic.zeroConfig', [uiRouter])
    .config(routes)
    .controller('ZeroConfigurationController', ZCController)
    .name;
