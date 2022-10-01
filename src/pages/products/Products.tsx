import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { clearProducts, getProducts } from '../../store/ducks/productsSlice';
import { useAppDispatch } from '../../store/hooks';
import { getProductsLength } from '../../store/selectors/products.selector';
import Filters from './components/Filters';
import ProductsList from './components/ProductsList';


export const Products = () => {
  const dispatch = useAppDispatch();
  const productsLength = useSelector(getProductsLength);

  useEffect(() => {
    if (productsLength === 0) {
      dispatch(getProducts());
    }
    return () => {
      dispatch(clearProducts());
    }
  }, [dispatch]);

  return (
    <>
      <div className="filters">
        <Filters />
      </div>
      <div className="products">
        <ProductsList />
      </div>
    </>
  )
};
