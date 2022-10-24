import axios from "axios";

const baseUrl = 'http://localhost:8080';

// PRODUCTS
export function fetchAllProducts(): Promise<any[]> {
  return axios.request({
    method: 'get',
    url: `backend/catalog`
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
    url: `backend/categories`
  })
};

// AUTH

export function googleSignIn(): Promise<any> {
  return axios.request({
    method: 'get',
    url: `${baseUrl}/auth/google`
  });
}
