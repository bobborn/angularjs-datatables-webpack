/**
 * Created by bobtian on 16/2/3.
 */

import angular from 'angular';
import uiRouter from 'angular-ui-router';

import routes from './de.routes.js';
import DtEventsController from './de.controller.js';


export default angular.module('app.components.advanced.dt-events', [uiRouter])
    .config(routes)
    .controller('DtEventsController', DtEventsController)
    .name;