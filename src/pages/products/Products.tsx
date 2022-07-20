import React, { useEffect } from 'react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { clearProducts, getProducts } from '../../store/ducks/productsSlice';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { getProductsLength } from '../../store/selectors';

export const Products = () => {
  const dispatch = useAppDispatch();
  const products = useAppSelector((state: any) => state.products.items);
  const loading = useAppSelector((state: any) => state.products.loading);
  const productsLength = useSelector(getProductsLength);

  useEffect(() => {
      dispatch(getProducts());
    return () => {
      dispatch(clearProducts());
    }
  }, [dispatch]);

  console.log('productsLength', productsLength, loading);

  return (
    <div>
      {
        products.length > 0 && products.map((p:any) => (
          <div key={p.id}>{ p.name }</div>
        )
        )
      }

      {
        loading === true && <p>Loading...</p>
      }
    </div>
  )
};
