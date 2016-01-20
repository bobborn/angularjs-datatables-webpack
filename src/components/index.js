/**
 * Created by bob on 2016/1/20.
 */


import angular from 'angular';
import role from './role';
import  zeroConfig from './zero-configuration';

export default angular.module('app.components', [role, zeroConfig])
    .name;