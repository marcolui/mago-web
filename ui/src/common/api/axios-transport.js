import axios from 'axios';

class AxiosTransport {
    constructor() {
        this.axios = axios.create({
            headers: {
                post: {'Content-Type': 'application/json'},
                put: {'Content-Type': 'application/json'}
            }
        })
    }

    get(path) {
        return this.axios.get(path).then(res => res.data).catch(e => {
            console.log(e);
        });
    }

    post(path, payload, headers = null) {
        return this.axios.post(path, payload, {headers}).then(res => res.data).catch(e => {
            console.log(e);
        });
    }
}

export default AxiosTransport;