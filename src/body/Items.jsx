import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { itemsFetch, stockPriceFetch } from './itemsSlice'; 
import { Products } from './Products';

export const Items = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.items.data);
  const itemsStatus = useSelector((state) => state.items.status);
  const stockPrices = useSelector((state) => state.stockPrice.data);
  const stockPricesStatus = useSelector((state) => state.stockPrice.status);

  useEffect(() => {
    dispatch(itemsFetch());
    dispatch(stockPriceFetch());
  }, [dispatch]);

  if(itemsStatus === 'loading' && stockPricesStatus ===  'loading'){
    return(
        <p className="text">
        Loading...
    </p>
    );
  }

  if(itemsStatus === 'failed'){
    return(
        <p className="text">
        Failed to load items.
    </p>
    );
  }

  if(itemsStatus === 'succeeded' && stockPricesStatus ===  'succeeded'){
    return(
      <div className="w-full flex justify-center">
        <Products items={items} stockPrices={stockPrices} />
      </div>
    );
  }
}

