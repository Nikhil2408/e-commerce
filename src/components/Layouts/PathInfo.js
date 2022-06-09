import React from 'react';
import style from './PathInfo.module.css';
import Wrapper from './Wrapper';
import { Link, useLocation } from 'react-router-dom';

export const PathInfo = () => {
  const location = useLocation();
  return (
    <React.Fragment>
      <Wrapper>
        <section className={style.pathInfoSection}>
          <h1>
            <Link to='/'>Home</Link> / &nbsp;
            <span className={style.pathText}>
              {location.pathname.replace('/', '')}
            </span>
          </h1>
        </section>
      </Wrapper>
    </React.Fragment>
  );
};
