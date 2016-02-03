/**
 * Created by bobtian on 16/2/3.
 */


import angular from 'angular';
import uiRouter from 'angular-ui-router';

import routes from './hdo.routes.js';
import Html5DataOptionsController from './hdo.controller.js';


export default angular.module('app.components.advanced.html5-data-options', [uiRouter])
    .config(routes)
    .controller('Html5DataOptionsController', Html5DataOptionsController)
    .name;