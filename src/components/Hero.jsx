import React from 'react'
import styles from '../styles'
import { discount, robot } from '../assets'
import GetStarted from './GetStarted'

const Hero = () => (
  <section 
   id="Home"
   className={`flex md:flex-row flex-col ${styles.paddingY}`}
  >
    <div
      className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:p-18 px-6`}
    >
      <div
        className={style.wrapper1}
      >
        <img
          src={discount}
          alt="discount"
          className={style.icon}
        />
        <p className={`${styles.paragraph} ml-2`}>
         <span className='text-white'>20%</span> Discount for {" "}
         <span className='text-white'>1 Month</span> Account
        </p>
      </div>
      <div className={style.description}>
      <h1 className={style.details1}>
        The Next <br className='sm:block 
          hidden'/> {" "}
          <span className='text-gradient'>Generation</span> {" "}
      </h1>
      <div className={style.started}>
        <GetStarted />
      </div>
      </div>
      <h1 className={style.details2}>
        Payment Method
      </h1>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Our team of Experts uses a Methodology
        to Identifty the Credit Card most likely
        to fit your needs. We Examine annual
         percentage rates, annual  fees
      </p>
    </div>
    <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
      <img
         src={robot}
         alt="billing"
         className={style.image}
      />
      <div className={style.div1} />
      <div className={style.div2} />
      <div className={style.div3} />
    </div>
    <div className={`ss:hidden ${styles.flexCenter}`}>
      <GetStarted />
    </div>
  </section>
)



export default Hero

const style = {
  wrapper1:`flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px mb-2]`,
  icon:`w-[32px] h-[32px]`,
  description:`flex flex-row justify-between items-center w-full`,
  details1:`flex-1 font-poppins font-semibold ss:text-[72px]
   text-[52px] text-white ss:leading-[100px] leading-[75px]`,
   details2:`font-poppins font-semibold ss:text-[68px]
   text-[52px] text-white ss:leading-[100px] leading-[75px] w-full`,
  started:`ss:flex hidden md:mr-4 mr-0`,
  image:`w-[100%] h-[100%] relative z-[5]`,
  div1:`absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient`,
  div2:`absolute z-[1] w-[80%] h-[80%] rounded-full bottom-40 white__gradient`, 
  div3:`absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient`, 
}