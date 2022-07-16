import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Register from './pages/register/Register';
import NotFound from './pages/not-found/NotFound';
import Home from './pages/home/Home';
import Products from './pages/products/Products';

const Login = React.lazy(() => import('./pages/login/Login'));

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
        <Route
            index
            element={<Home />}
          />
          <Route path="products" element={<Products />} />
          <Route path="register" element={<Register />} />
          <Route path="login" element={
            <React.Suspense fallback={<>Fallback component</>}>
              <Login />
            </React.Suspense>
          } />
          <Route
            path="*"
            element={<NotFound />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
