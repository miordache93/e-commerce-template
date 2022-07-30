import React from 'react';
import { useSelector } from 'react-redux';
import { getProduct } from '../../../store/ducks/productSlice';
import { useAppDispatch } from '../../../store/hooks';
import { getCatalog } from '../../../store/selectors/products.selector';

const ProductsList = () => {
  const { loading, products, error } = useSelector(getCatalog);
  const dispatch = useAppDispatch();

  const handleProductClick = (id: number): void => {
    dispatch(
      getProduct(id)
    );
  };

  if (error) {
    return <>Sorry an error occured...</>
  }

  return (
    <div className="Products">
      {
        products.length > 0 && products.map((p: any) => (
          <div onClick={() => handleProductClick(p.id)} key={p.id}>{p.name}</div>
        )
        )
      }
      {
        loading === true && <p>Loading...</p>
      }
    </div>
  );
}

export default ProductsList;


