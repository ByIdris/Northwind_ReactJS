import axios from "axios";

export default class ProductService {
    getProducts(){
        return axios.get(`http://localhost:8080/api/northwind/products/getAll`)
    }

    getProductById(id){
        return axios.get(`http://localhost:8080/api/northwind/products/getById/${id}`)
    }
}