import React from 'react';
import style from './FilterControl.module.scss';
// import './FilterControl.module.scss';
export const FilterControl = () => {
  console.log(style);
  return (
    <div>
      <form action='' className={style.formGroup}>
        <div className={style.formControl}>
          <input type='text' className={style.textBox} placeholder='search' />
        </div>
        <div className={style.formControl}>
          <h3>Category</h3>
          <li className={style.radioSelectorList}>
            <ul>
              <input type='radio' name='category' id='all' />
              <label htmlFor='all'> All</label>
            </ul>
            <ul>
              <input type='radio' name='category' id='office' />
              <label htmlFor='office'>Office</label>
            </ul>
            <ul>
              <input type='radio' name='category' id='livingroom' />
              <label htmlFor='livingroom'> Living Room</label>
            </ul>
            <ul>
              <input type='radio' name='category' id='kitched' />
              <label htmlFor='kitched'> Kitchen</label>
            </ul>
            <ul>
              <input type='radio' name='category' id='bedroom' />
              <label htmlFor='bedroom'> Bedroom</label>
            </ul>
            <ul>
              <input type='radio' name='category' id='dining' />
              <label htmlFor='dining'> Dining</label>
            </ul>
            <ul>
              <input type='radio' name='category' id='kids' />
              <label htmlFor='kids'> Kids</label>
            </ul>
          </li>
        </div>
        <div className={style.formControl}>
          <h3>Company</h3>
          <select name='' id=''>
            <option value=''>all</option>
          </select>
        </div>
        <div className={style.formControl}>
          <h3>colors</h3>
          <ul className={style.colorSelector}>
            <li>
              {/* <input type='button' className={style.btnUnderline} value='all' /> */}
              <input type='radio' name='color' id='allcolors' />
              <label htmlFor='allcolors'>All</label>
            </li>

            <li>
              <input type='radio' name='color' id='green' />
              <label for='green'>
                <span className={style.green}></span>
              </label>
            </li>
            <li>
              <input type='radio' name='color' id='yellow' />
              <label for='yellow'>
                <span className={style.yellow}></span>
              </label>
            </li>
            <li>
              <input type='radio' name='color' id='blue' />
              <label for='blue'>
                <span className={style.blue}></span>
              </label>
            </li>
            <li>
              <input type='radio' name='color' id='pink' />
              <label for='pink'>
                <span className={style.pink}></span>
              </label>
            </li>
            <li>
              <input type='radio' name='color' id='grey' />
              <label for='grey'>
                <span className={style.grey}></span>
              </label>
            </li>
          </ul>
        </div>
        <div className={style.formControl}>
          <h3>Price</h3>
          <span className={style.currencySpan}>dummy_2,000</span>
          <input type='range' name='' id='' />
        </div>
        <div className={style.formControl}>
          <label htmlFor='shipping'>Free Shipping&nbsp; </label>
          <input type='checkbox' name='shipping' id='shipping' />
        </div>
        <div className={style.formControl}>
          <input
            type='reset'
            className={`${style.btn} ${style.btnRed}`}
            value='clear filters'
          />
        </div>
      </form>
    </div>
  );
};
