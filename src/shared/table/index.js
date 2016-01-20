/**
 * Created by bob on 2016/1/20.
 */


import angular from 'angular';
import TableDirective from './table.directive';

export default angular.module('app.shared.table', [])
    .directive('myTable', ()=>new TableDirective())
    .name;

