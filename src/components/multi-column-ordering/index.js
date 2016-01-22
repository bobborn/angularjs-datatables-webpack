/**
 * Created by bob on 2016/1/22.
 */

import angular from 'angular';
import uiRouter from 'angular-ui-router';

import routes from './mco.routes';
import MultiColumnOrderingController from './mco.controller';


export default angular.module('app.components.multi-column-ordering', [uiRouter])
    .config(routes)
    .controller('MultiColumnOrderingController', MultiColumnOrderingController)
    .name;