import axios from "axios";
const Axios = axios.create({baseURL: "https://restaurant-backend-007.herokuapp.com/api"});

export default Axios;