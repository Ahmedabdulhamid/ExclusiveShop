import { configureStore } from '@reduxjs/toolkit';
import { productsToolkit } from './products';
import { categ } from './category';

export const store=configureStore({
    reducer:{
      productsToolkit,
      categ
    
    }
})