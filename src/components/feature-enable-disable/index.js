/**
 * Created by bob on 2016/1/20.
 */

import angular from 'angular';
import uiRouter from 'angular-ui-router';

import routes from './fed.routes';
import FeatureEnableDisableController from './fed.controller';


export default angular.module('app.components.feature-enable-disable', [uiRouter])
    .config(routes)
    .controller('FeatureEnableDisableController', FeatureEnableDisableController)
    .name;