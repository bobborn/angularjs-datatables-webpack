/**
 * Created by bobtian on 16/2/3.
 */


import angular from 'angular';
import uiRouter from 'angular-ui-router';

import routes from './cr.routes.js';
import ColumnRenderController from './cr.controller.js';


export default angular.module('app.components.advanced.column-render', [uiRouter])
    .config(routes)
    .controller('ColumnRenderController', ColumnRenderController)
    .name;