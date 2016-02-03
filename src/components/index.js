/**
 * Created by bob on 2016/1/20.
 */


import angular from 'angular';
import role from './role';
import  zeroConfig from './zero-configuration';
import featureEnableDisable from './feature-enable-disable';
import defaultOrdering from './default-ordering';
import multiColumnOrdering from './multi-column-ordering';
import multiTables from './multi-tables';
import hiddenColumns from './hidden-columns';

export default angular.module('app.components', [role, zeroConfig, featureEnableDisable,
    defaultOrdering, multiColumnOrdering,
    multiTables,hiddenColumns])
    .name;