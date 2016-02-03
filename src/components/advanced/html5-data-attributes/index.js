/**
 * Created by bobtian on 16/2/3.
 */


import angular from 'angular';
import uiRouter from 'angular-ui-router';

import routes from './hda.routes.js';
import Html5DataAttrsController from './hda.controller.js';


export default angular.module('app.components.advanced.events-live', [uiRouter])
    .config(routes)
    .controller('Html5DataAttrsController', Html5DataAttrsController)
    .name;