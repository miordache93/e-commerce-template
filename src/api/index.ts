import axios from "axios";

// PRODUCTS
export function fetchAllProducts(): Promise<any[]> {
  return axios.request({
    method: 'get',
    url: `api/catalog`
  })
};

export function fetchProductById(productId: number): Promise<any[]> {
  return axios.request({
    method: 'get',
    url: `api/products/products/${productId}`
  })
};


// CATEGORIES
export function fetchAllCategories(): Promise<any[]> {
  return axios.request({
    method: 'get',
    url: `api/category`
  })
};

// AUTH

export function googleSignIn(): Promise<any> {
  return axios.request({
    method: 'get',
    url: `api/auth/google`
  });
}
