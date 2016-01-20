/**
 * Created by bob on 2016/1/20.
 */


import angular from 'angular';
import uiRouter from 'angular-ui-router';

import routes from './zc.routes';
import ZCController from './zc.controller';


export default angular.module('app.components.zeroConfig', [uiRouter])
    .config(routes)
    .controller('ZeroConfigurationController', ZCController)
    .name;
