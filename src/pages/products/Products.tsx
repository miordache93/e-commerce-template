import React, { useEffect } from 'react'
import { useSelector} from 'react-redux';
import { getProduct } from '../../store/ducks/productSlice';
import { clearProducts, getProducts } from '../../store/ducks/productsSlice';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { getProductsLength } from '../../store/selectors';

export const Products = () => {
  const dispatch = useAppDispatch();
  const products = useAppSelector((state: any) => state.products.items);
  const loading = useAppSelector((state: any) => state.products.loading);
  const selectedProduct = useAppSelector((state: any) => state.product.product);
  const productsLength = useSelector(getProductsLength);

  useEffect(() => {
      dispatch(getProducts());
    return () => {
      dispatch(clearProducts());
    }
  }, [dispatch]);

  console.log('selectedProduct', selectedProduct, loading);

  const handleProductClick = (id: number): any => {
    dispatch(
      getProduct(id)
    );
  };

  return (
    <div>
      {
        products.length > 0 && products.map((p:any) => (
          <div onClick={() => handleProductClick(p.id)} key={p.id}>{ p.name }</div>
        )
        )
      }

      {
        loading === true && <p>Loading...</p>
      }
    </div>
  )
};
