import axios from 'axios'


const HOST_URL = 'http://localhost:8080'
const SHAPE_API_URL = `${HOST_URL}/shape/list`

class ShapeDataService {

    retrieveAllShape() {
        return axios.get(`${SHAPE_API_URL}`);
    }
}

export default new ShapeDataService()

