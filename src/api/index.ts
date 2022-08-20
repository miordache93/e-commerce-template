import axios from "axios";

export function fetchProductsApi(): Promise<any[]> {
  return axios.request({
    method: 'get',
    url: 'http://localhost:8080/catalog'
  })
};

export function fetchProductApi(productId: number): Promise<any[]> {
  return axios.request({
    method: 'get',
    url: `http://localhost:8080/catalog/${productId}`
  })
};
