/**
 * Created by bobtian on 16/2/3.
 */

import angular from 'angular';
import eventsLive from './events-live';
import dtEvents from './dt-events';
import columnRender from './column-render';


export default angular.module('app.components.advanced', [eventsLive, dtEvents, columnRender])
    .name;