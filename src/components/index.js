/**
 * Created by bob on 2016/1/20.
 */


import angular from 'angular';
import basic from './basic';
import advanced from './advanced';

export default angular.module('app.components', [basic,advanced])
    .name;