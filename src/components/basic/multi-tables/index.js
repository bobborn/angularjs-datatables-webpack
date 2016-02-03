/**
 * Created by bobtian on 16/2/3.
 */


import angular from 'angular';
import uiRouter from 'angular-ui-router';

import routes from './mt.routes.js';
import MultiTablesController from './mt.controller.js';


export default angular.module('app.components.multi-tables', [uiRouter])
    .config(routes)
    .controller('MultiTablesController',MultiTablesController)
    .name;