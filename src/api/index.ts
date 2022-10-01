import axios from "axios";

const baseUrl = 'https://fakestoreapi.com';


// PRODUCTS
export function fetchAllProducts(): Promise<any[]> {
  return axios.request({
    method: 'get',
    url: `${baseUrl}/products`
  })
};

export function fetchProductById(productId: number): Promise<any[]> {
  return axios.request({
    method: 'get',
    url: `${baseUrl}products/products/${productId}`
  })
};


// CATEGORIES
export function fetchAllCategories(): Promise<any[]> {
  return axios.request({
    method: 'get',
    url: `${baseUrl}/products/categories`
  })
};
