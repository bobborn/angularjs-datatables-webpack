/**
 * Created by bobtian on 16/2/3.
 */

export default class EventsLiveController {
    constructor() {
        this.options = {};
    }

    rowClick(row) {
        var data = row.data();
        alert('You clicked on ' + data[0] + '\'s row');
    }
}


EventsLiveController.$inject = [];