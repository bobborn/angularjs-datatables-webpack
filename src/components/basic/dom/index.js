/**
 * Created by bobtian on 16/2/3.
 */


import angular from 'angular';
import uiRouter from 'angular-ui-router';

import routes from './dom.routes.js';
import DomController from './dom.controller.js';


export default angular.module('app.components.basic.dom', [uiRouter])
    .config(routes)
    .controller('DomController', DomController)
    .name;