/**
 * Created by bobtian on 16/2/3.
 */

import angular from 'angular';
import uiRouter from 'angular-ui-router';

import routes from './el.routes.js';
import EventsLiveController from './el.controller.js';


export default angular.module('app.components.advanced.events-live', [uiRouter])
    .config(routes)
    .controller('EventsLiveController', EventsLiveController)
    .name;