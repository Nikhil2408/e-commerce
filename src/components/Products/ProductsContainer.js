import React from 'react';
import { FilterControl } from './FilterControl';
import { ProductsList } from './ProductsList';
import { SortControl } from './SortControl';
import style from './ProductsContainer.module.css';

export const ProductsContainer = () => {
  return (
    <div>
      <section className={style.productsSection}>
        <aside>
          <FilterControl />
        </aside>
        <div>
          <SortControl />
          <ProductsList />
        </div>
      </section>
    </div>
  );
};
