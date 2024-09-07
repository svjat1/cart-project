import {IRes} from "../types/resType";
import {IProducts} from "../interfaces/IProducts";
import {apiServices} from "./apiServices";
import {urls} from "../constants";

const productService = {
    getAll:():IRes<IProducts[]>=> apiServices.get(urls.products.base)
}

export {
    productService
}