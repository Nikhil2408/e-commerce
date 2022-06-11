import React from 'react';
import style from './Footer.module.css';

export const Footer = () => {
  return (
    <React.Fragment>
      <footer className={style.footer}>
        <h4>
          &copy; 2022 <span className={style.textPrimary}>ComfySloth</span> All
          rights reserved
        </h4>
      </footer>
    </React.Fragment>
  );
};
