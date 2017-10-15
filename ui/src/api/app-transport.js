import AxiosTransport from '../common/api/axios-transport';

export default class AppTransport {
    constructor() {
        this.transport = new AxiosTransport();
    }

    getItems() {
        return this.transport.get('/api/items');
    }
}