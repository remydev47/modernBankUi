import React from 'react';
import { card } from '../assets';
import styles, { layout } from '../styles';
import Button from './Button';

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Find a better card deal <br className="sm:block hidden"/> in few easy
        steps.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Arcu tortor, purus in mattis at sed
        interge faucibus. Aliquent quis Aliquent
        eget mauris tortor.$ Aliquet atriuces ac, 
        ametau.
      </p>
      <Button styles="mt-10"/>
    </div>

     <div className={layout.sectionImg}>
      <img src={card} alt="card" className={style.card1}/>
     </div>

  </section>
)

export default CardDeal

const style = {
  card1:`w-[100%] h-[100%]`,
  cardInfo:``,
}