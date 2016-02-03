/**
 * Created by bobtian on 16/2/3.
 */


import angular from 'angular';
import uiRouter from 'angular-ui-router';

import routes from './hc.routes.js';
import HiddenColumnsController from './hc.controller.js';


export default angular.module('app.components.hidden-columns', [uiRouter])
    .config(routes)
    .controller('HiddenColumnsController', HiddenColumnsController)
    .name;