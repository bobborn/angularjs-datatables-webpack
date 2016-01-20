/**
 * Created by bob on 2016/1/20.
 */


import angular from 'angular';
import uiRouter from 'angular-ui-router';

import roleListController from './role.list.controller';
import routing from './role.routes';


export default angular.module('app.components.role', [uiRouter])
    .config(routing)
    .controller('RoleListController', roleListController)
    .name;