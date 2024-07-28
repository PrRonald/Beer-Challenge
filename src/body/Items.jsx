import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { itemsFetch } from './itemsSlice'; // Replace with the actual path to your slice
import { Products } from './Products';

export const Items = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.items.data);
  const status = useSelector((state) => state.items.status);

  useEffect(() => {
    dispatch(itemsFetch());
  }, [dispatch]);

  if(status === 'loading'){
    return(
        <p className="text">
        Loading...
    </p>
    );
  }

  if(status === 'failed'){
    return(
        <p className="text">
        Failed to load items.
    </p>
    );
  }

  if(status === 'succeeded'){
    return(
        <Products items={items} />
    );
  }
}

