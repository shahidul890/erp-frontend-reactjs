import axios from "axios";


let Http = () => {
    return axios
            .create({
                baseURL: "http://moonskynl.com/api",
                headers:{
                    "access-control-allow-origin" : "*",
                    "Content-Type": "application/json"
                }
            })
}

export default Http;