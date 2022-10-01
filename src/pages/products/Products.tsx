import React, { useEffect } from 'react'
import { clearProducts, getProducts } from '../../store/ducks/productsSlice';
import { useAppDispatch } from '../../store/hooks';
import Filters from './components/Filters';
import ProductsList from './components/ProductsList';


export const Products = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
      dispatch(getProducts());
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
