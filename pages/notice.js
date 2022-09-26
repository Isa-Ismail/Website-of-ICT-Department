import React from 'react'
import Layout from './../components/Layout'
import styles from '../styles/Notice.module.css'

const notice = () => {
  return (
    <Layout>
      <div className='my-[10rem] min-h-screen'>
        <div>
          <h1 className='text-white text-center mb-6'>Notices</h1>
        </div>
        <div className="flex-col ">
          <div className='flex text-white'>
            <p className=' text-white bg-green-700 hover:bg-teal-500 py-4 px-8 border-solid border-2 border-white cursor-pointer'>General</p>
            <p className=' text-white bg-green-700 hover:bg-teal-500 py-4 px-8 border-solid border-2 border-white cursor-pointer'>1st</p>
            <p className=' text-white bg-green-700 hover:bg-teal-500 py-4 px-8 border-solid border-2 border-white cursor-pointer'>2nd</p>
            <p className=' text-white bg-green-700 hover:bg-teal-500 py-4 px-8 border-solid border-2 border-white cursor-pointer'>3rd</p>
            <p className=' text-white bg-green-700 hover:bg-teal-500 py-4 px-8 border-solid border-2 border-white cursor-pointer'>4th</p>
            <p className=' text-white bg-green-700 hover:bg-teal-500 py-4 px-8 border-solid border-2 border-white cursor-pointer'>MS</p>
          </div>
          <div className="p-6 border-solid border-2 border-white">

            <div className={styles.event_date}>
              <div className={styles.event_date_wrap}>
                <p>06</p>
                <span>Nov.17</span>
              </div>
            </div>
            <div className={styles.date_description}>
              <h3 >Eestibulum sodales metus.</h3>
              <p >
                When an unknown printer took a galley of type and
                scrambled it to make a type specimen book ...
              </p>
              <button className="bg-teal-700  hover:bg-teal-500 text-white font-bold py-1 px-3 rounded mt-3">
                Read..
              </button>
              <hr className={styles.event_line} />
            </div>


            <div className={styles.event_date}>
              <div className={styles.event_date_wrap}>
                <p>06</p>
                <span>Nov.17</span>
              </div>
            </div>
            <div className={styles.date_description}>
              <h3 className='text-white'>Eestibulum sodales metus.</h3>
              <p className='text-white'>
                When an unknown printer took a galley of type and
                scrambled it to make a type specimen book ...
              </p>
              <button className="bg-teal-700  hover:bg-teal-500 text-white font-bold py-1 px-3 rounded mt-3">
                Read..
              </button>
              <hr className={styles.event_line} />
            </div>



            <div className={styles.event_date}>
              <div className={styles.event_date_wrap}>
                <p>06</p>
                <span>Nov.17</span>
              </div>
            </div>
            <div className={styles.date_description}>
              <h3>Eestibulum sodales metus.</h3>
              <p>
                When an unknown printer took a galley of type and
                scrambled it to make a type specimen book ...
              </p>
              <button className="bg-teal-700  hover:bg-teal-500 text-white font-bold py-1 px-3 rounded mt-3">
                Read..
              </button>
              <hr className={styles.event_line} />
            </div>


            <div className={styles.event_date}>
              <div className={styles.event_date_wrap}>
                <p>06</p>
                <span>Nov.17</span>
              </div>
            </div>
            <div className={styles.date_description}>
              <h3>Eestibulum sodales metus.</h3>
              <p>
                When an unknown printer took a galley of type and
                scrambled it to make a type specimen book ...
              </p>
              <button className="bg-teal-700  hover:bg-teal-500 text-white font-bold py-1 px-3 rounded mt-3">
                Read..
              </button>
              <hr className={styles.event_line} />
            </div>
            <div className={styles.event_date}>
              <div className={styles.event_date_wrap}>
                <p>06</p>
                <span>Nov.17</span>
              </div>
            </div>
            <div className={styles.date_description}>
              <h3>Eestibulum sodales metus.</h3>
              <p>
                When an unknown printer took a galley of type and
                scrambled it to make a type specimen book ...
              </p>
              <button className="bg-teal-700  hover:bg-teal-500 text-white font-bold py-1 px-3 rounded mt-3">
                Read..
              </button>
              <hr className={styles.event_line} />
            </div>
            <div className={styles.event_date}>
              <div className={styles.event_date_wrap}>
                <p>06</p>
                <span>Nov.17</span>
              </div>
            </div>
            <div className={styles.date_description}>
              <h3>Eestibulum sodales metus.</h3>
              <p>
                When an unknown printer took a galley of type and
                scrambled it to make a type specimen book ...
              </p>
              <button className="bg-teal-700  hover:bg-teal-500 text-white font-bold py-1 px-3 rounded mt-3">
                Read..
              </button>
              <hr className={styles.event_line} />
            </div>

          </div>

        </div>

        <div className='text-center mt-6'>
          <button className="bg-teal-700  hover:bg-teal-500 text-white font-bold py-4 px-8 border  rounded ">
            Button
          </button>
        </div>
      </div>

    </Layout>
  )
}

export default notice


