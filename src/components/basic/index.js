/**
 * Created by bobtian on 16/2/3.
 */


import angular from 'angular';
import role from './role';
import zeroConfig from './zero-configuration';
import featureEnableDisable from './feature-enable-disable';
import defaultOrdering from './default-ordering';
import multiColumnOrdering from './multi-column-ordering';
import multiTables from './multi-tables';
import hiddenColumns from './hidden-columns';
import complexHeader from './complex-header';

export default angular.module('app.components.basic', [role, zeroConfig, featureEnableDisable,
    defaultOrdering, multiColumnOrdering,
    multiTables, hiddenColumns,
    complexHeader])
    .name;