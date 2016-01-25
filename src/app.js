/**
 * Created by bob on 2016/1/19.
 */

import $ from 'jquery';
import 'datatables';
import angular from 'angular';
import 'angular-resource';

import routing from './routes';
import components from './components';
import shared from './shared';

angular.module('app', ['ngResource', components,shared])
    .config(routing);