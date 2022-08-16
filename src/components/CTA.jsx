import React from 'react';
import styles from '../styles';
import Button from './Button'

const CTA = () =>  (
   <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}>
    <div className='flex=1 flex fleex-col'>
      <h2 className={`${styles.heading2}`}>
        Lets try our services now
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Everything you need to accept card paymens and
        grow your business anywhere in the planet.
      </p>
    </div>
    <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-0`}>
      <Button />
    </div>
   </section>
  )


export default CTA