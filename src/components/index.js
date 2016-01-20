/**
 * Created by bob on 2016/1/20.
 */


import angular from 'angular';
import role from './role';
import  zeroConfig from './zero-configuration';
import featureEnableDisable from './feature-enable-disable';
import defaultOrdering from './default-ordering';

export default angular.module('app.components', [role, zeroConfig, featureEnableDisable, defaultOrdering])
    .name;