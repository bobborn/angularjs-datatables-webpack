/**
 * Created by bobtian on 16/2/3.
 */

import angular from 'angular';
import uiRouter from 'angular-ui-router';

import routes from './cd.routes.js';
import CommaDecimalController from './cd.controller.js';


export default angular.module('app.components.basic.comma-decimal', [uiRouter])
    .config(routes)
    .controller('CommaDecimalController', CommaDecimalController)
    .name;