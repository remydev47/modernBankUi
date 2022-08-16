import React from 'react'
import { clients } from '../constants'
import styles from '../styles'

const Clients = () => (
    <section
     className={`${styles.flex-center} my-4`}
    >
      <div
        className={`${styles.flexCenter} flex-wrap w-full`}
      >
        {clients.map((client) => (
          <div key={client.id} className={`flex-1 ${styles.flexCenter}
           sm:minw-[192px] min-w-[120px]`}>
            <img src={client.logo} alt="logo"
               className='sm:w-[192px] w-[100px] object-contain' 
            />
          </div>
        ))}
      </div>
    </section>
  )

export default Clients