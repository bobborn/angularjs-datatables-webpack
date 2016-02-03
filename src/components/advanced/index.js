/**
 * Created by bobtian on 16/2/3.
 */

import angular from 'angular';
import eventsLive from './events-live';
import dtEvents from './dt-events';
import columnRender from './column-render';
import lengthMenu from './length-menu';
import domMultiElements from './dom-multiple-elements';
import complexHeader from './complex-header';
import objectDomRead from './object-dom-read';
import html5DataOptions from './html5-data-options';
import html5DataAttrs from './html5-data-attributes';

export default angular.module('app.components.advanced', [eventsLive, dtEvents, columnRender,
    lengthMenu, domMultiElements, complexHeader, objectDomRead,
    html5DataOptions,html5DataAttrs])
    .name;