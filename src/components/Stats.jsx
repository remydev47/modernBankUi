import React from 'react'
import { stats } from '../constants'
import styles from '../styles'


const Stats = () => (
    <section className={`${styles.flexCenter} ${style.container}`}>
      {stats.map((stat) => (
        <div key={stat.id} className={style.wrapper}>
          <h4 className={style.name}>{stat.value}</h4>
          <p className={style.title}>{stat.title}</p>
        </div>
      ))}
    </section>
)
export default Stats

const style = {
  container:`flex-row flex-wrap sm:mb-20 mb-6`,
  wrapper:`flex-1 flex jusify-start items-center flex-row m-3`,
  name:`font-poppins font-semibold xs:text-[40px] text-[30px] xs:leading-[53px] leading-[43px] text-white`,
  title:`font-poppins font-semibold xs:text-[40px] text-[30px] xs:leading-[53px] leading-[43px] text-white`
}