import React from 'react'
import { features } from '../constants'
import styles,{ layout } from '../styles'
import Button from './Button'

const FeaturedCard = ({icon, title, content, index}) => (
  <div className={`flex flex-row p-6 rounded-[20px] ${index !== features.length - 1 ? "mb-6" : "mb-0"} feature-card`}>
    <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
      <img src={icon} alt="icon" className='w-[60%] h-[60%] object-contain'/>
    </div>
    <div className={style.details}>
      <h4 className={style.text}>
        {title}
      </h4>
      <p className={style.content}>
        {content}
      </p>
    </div>
  </div>
)

const Business = () => {
  return (
    <section id="features" className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>You do the Business, <br className={style.info}/> we'll handle 
          the money.
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          With the right credit cards, you can 
          improve your financial life by building 
          credit, earning rewards and 
          saving money.But with hundreds of credit cards on the market.
        </p>
        <Button styles="mt-10" />
      </div>

      <div className={`${layout.sectionImg} flex-col`}>
        {features.map((feature,index) => (
          <FeaturedCard key={feature.id} {...feature} index={index} />
        ))}
      </div>

    </section>
  )
}

export default Business

const style = {
  info:`sm:block hidden`,
  details:`flex-1 flex flex-col ml-3`,
  text:`font-poppins font-semibold text-white text-[18px] leading-[23px] mb-1`,
  content:`font-poppins font-normal text-dimWhite text-[16px] leading-[24px] mb-1`
}