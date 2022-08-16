import React from 'react';
import { apple,bill, google } from '../assets';
import styles, { layout } from '../styles'

const Billing = () => (
  <section id="product" className={layout.sectionReverse}>
    <div className={layout.sectionImg}>
      <img className={style.image} src={bill} alt="billing" />
      <div className={style.div1} />
      <div className={style.div2} />
    </div>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Easily Control you <br className='sm:block hidden'/> billing & 
        Invoicing.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Elit enim sed massa etiam. Mauris eu
        adipiscing ultrices ametodio aenean
        neque. Fusce ipsu, orci rhoncus 
        aroppotittor integer platea placerat
      </p>
      <div className={style.image2}>
        <img src={apple} alt="apple-store" className='w-[128px] h-[42px] object-contain mr-5 cursor-pointer'/>
        <img src={google} alt="play_store" className='w-[128px] h-[42px] object-contain  cursor-pointer'/>
      </div>
    </div>
  </section>
)

export default Billing

const style={
  image:`w-[100%] h-[100%] relative z-[5]`,
  div1:`absolute z-[3] -left-1/2 top-0 w-[50%] rounded-full white__gradient`,
  div2:`absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient`,
  image2:`flex flex-row flex-wrap sm:mt-10 mt-6`
}