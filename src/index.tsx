import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// Translations
import './i18n';

// Custom Pages
import {
  Home,
  Products,
  NotFound
} from './pages';

// Custom components

// Redux Store
import store from './store/configureStore';
import { Provider } from 'react-redux'
import ProductDetails from './pages/products/components/ProductDetails';

// Lazy loaded pages
const Login = React.lazy(() => import('./pages/login/Login').then(module => ({ default: module.Login })));
const Register = React.lazy(() => import('./pages/register/Register').then(module => ({ default: module.Register })));
const Cart = React.lazy(() => import('./pages/cart/Cart').then(module => ({ default: module.Cart })));
const Admin = React.lazy(() => import('./pages/admin/Admin').then(module => ({ default: module.Admin })));

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<App />}>
            <Route
              index
              element={<Home />}
            />
            <Route path="products" element={<Products />} />
            <Route path="products/:id" element={<ProductDetails />} />
            <Route path="register" element={<Register />} />
            {/* Lazy loaded components */}
            <Route path="login" element={
              <React.Suspense fallback={<>Fallback component</>}>
                <Login />
              </React.Suspense>
            } />
            <Route path="register" element={
              <React.Suspense fallback={<>Fallback component</>}>
                <Register />
              </React.Suspense>
            } />
            <Route path="cart" element={
              <React.Suspense fallback={<>Fallback component</>}>
                <Cart />
              </React.Suspense>
            } />
            <Route path="admin" element={
              <React.Suspense fallback={<>Fallback component</>}>
                <Admin />
              </React.Suspense>
            } />
            <Route
              path="*"
              element={<NotFound />}
            />
          </Route>
        </Routes>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
