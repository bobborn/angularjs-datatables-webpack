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
import dom from './dom';
import flexibleWidth from './flexible-width';
import stateSave from './state-save';
import altPagination from './alt-pagination';
import scrollY from './scroll-y';

export default angular.module('app.components.basic', [role, zeroConfig, featureEnableDisable,
    defaultOrdering, multiColumnOrdering,
    multiTables, hiddenColumns,
    complexHeader, dom, flexibleWidth,
    stateSave,altPagination,scrollY])
    .name;