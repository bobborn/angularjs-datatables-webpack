/**
 * Created by bobtian on 16/2/3.
 */


import angular from 'angular';
import uiRouter from 'angular-ui-router';

import routes from './hc.routes';
import HiddenColumnsController from './hc.controller';


export default angular.module('app.components.hidden-columns', [uiRouter])
    .config(routes)
    .controller('HiddenColumnsController', HiddenColumnsController)
    .name;