import React from 'react';
import style from './AboutSection.module.css';
import img from '../../img/about.jpeg';

export const AboutSection = () => {
  return (
    <React.Fragment>
      <section className={style.aboutSection}>
        <div className={style.columnLeft}>
          <img src={img} alt='' srcset='' />
        </div>
        <div className={style.columnRight}>
          <h1>Our Story</h1>
          <div className={style.underlineBar}></div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
            aliquam voluptatibus earum quidem ex. Iste, in quisquam repudiandae
            quia corrupti molestiae temporibus illum debitis rerum beatae quod
            assumenda nam molestias blanditiis repellat dolores provident
            facilis possimus sapiente sit ut ipsa. Adipisci illo eius voluptates
            sapiente dicta nulla numquam! Voluptate eum at dolores suscipit hic
            dolorem nobis nam quas numquam minus quis tempora repudiandae,
            aliquid veniam beatae nesciunt consectetur veritatis animi earum ea
            a odit. Autem inventore tempora dolorem iste, quis eum totam
            officiis rem quibusdam! Nihil iure quibusdam asperiores, animi
            voluptates accusamus laboriosam, aspernatur voluptatem veniam
            dolorem enim, odit itaque.
          </p>
        </div>
      </section>
    </React.Fragment>
  );
};
