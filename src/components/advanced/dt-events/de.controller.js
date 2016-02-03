/**
 * Created by bobtian on 16/2/3.
 */


export default class DtEventsController {
    constructor() {
        this.options = {};
    }


    orderCallback() {
        console.log('ordered');
    }

    searchCallback(){
        console.log('searched');
    }

    pageCallback(){
        console.log('paged');
    }
}


DtEventsController.$inject = [];