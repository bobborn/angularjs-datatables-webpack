/**
 * Created by bobtian on 16/2/3.
 */


import angular from 'angular';
import uiRouter from 'angular-ui-router';

import routes from './ch.routes.js';
import ComplexHeaderController from './ch.controller.js';


export default angular.module('app.components.basic.complex-header', [uiRouter])
    .config(routes)
    .controller('ComplexHeaderController', ComplexHeaderController)
    .name;