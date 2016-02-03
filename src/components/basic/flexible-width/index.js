/**
 * Created by bobtian on 16/2/3.
 */

import angular from 'angular';
import uiRouter from 'angular-ui-router';

import routes from './fw.routes.js';
import FlexibleWidthController from './fw.controller.js';


export default angular.module('app.components.basic.flexible-width', [uiRouter])
    .config(routes)
    .controller('FlexibleWidthController', FlexibleWidthController)
    .name;