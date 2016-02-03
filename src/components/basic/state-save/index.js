/**
 * Created by bobtian on 16/2/3.
 */

import angular from 'angular';
import uiRouter from 'angular-ui-router';

import routes from './ss.routes.js';
import StateSaveController from './ss.controller.js';


export default angular.module('app.components.basic.state-save', [uiRouter])
    .config(routes)
    .controller('StateSaveController', StateSaveController)
    .name;