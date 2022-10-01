import React from 'react';
import { useSelector } from 'react-redux';
import { getProduct } from '../../../store/ducks/productSlice';
import { useAppDispatch } from '../../../store/hooks';
import { getCatalog } from '../../../store/selectors/products.selector';
import ProductItem from './ProductItem';
import { useNavigate } from "react-router-dom";
import './ProductsList.scss';

const ProductsList = () => {
  const { loading, products, error } = useSelector(getCatalog);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleProductClick = (id: number): void => {
    dispatch(
      getProduct(id)
    );
    navigate(`/products/${id}`);
  };

  if (error) {
    return <>Sorry an error occured...</>
  }

  return (
    <div className="ProductsList">
      {
        loading ? <p>Loading...</p> :
        products.length > 0 && products.map((p: any) => (
          <ProductItem
            key={p.id}
            product={p}
            handleClick={handleProductClick}
          />
        ))
      }
    </div>
  );
}

export default ProductsList;


