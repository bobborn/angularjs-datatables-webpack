/**
 * Created by bobtian on 16/2/3.
 */

import angular from 'angular';
import uiRouter from 'angular-ui-router';

import routes from './dme.routes.js';
import DomMultipleElementsController from './dme.controller.js';


export default angular.module('app.components.advanced.dom-multi-elements', [uiRouter])
    .config(routes)
    .controller('DomMultipleElementsController', DomMultipleElementsController)
    .name;