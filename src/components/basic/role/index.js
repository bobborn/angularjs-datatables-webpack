/**
 * Created by bob on 2016/1/20.
 */


import angular from 'angular';
import uiRouter from 'angular-ui-router';

import Role from './role.service.js';

import roleListController from './role.list.controller.js';
import routing from './role.routes.js';



export default angular.module('app.components.role', [uiRouter])
    .config(routing)
    .controller('RoleListController', roleListController)
    .factory('Role', Role)
    .name;