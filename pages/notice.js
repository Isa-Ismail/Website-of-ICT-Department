import { useEffect, useState } from 'react'
import Layout from './../components/Layout'
import styles from '../styles/Notice.module.css'

const notice = () => {

  const [notices, setNotices] = useState([]);
  const [batch, setBatch] = useState('');
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://ict-6.vercel.app/api/notice/')
        const data = await response.json();
        setNotices(data);
      } catch (error) {
        console.log(error)
      }
    }
    fetchData();
  }, [])





  //content = notices.filter(notice => notice.batch === 'first')
  // console.log(content)
  let content = [];
  let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  let created_date = '';
  let year = ''
  let month = ''
  let date = ''
  content = notices?.filter(notice => (batch === '') ? true : (notice.batch === batch)).map(notice => {

    created_date = new Date(notice?.date);
    year = created_date.getFullYear();
    month = months[created_date.getMonth()];
    date = created_date.getDate();
    return (
      <div className="p-6 border-solid border-2 border-white">
        <div className={styles.event_date}>
          <div className={styles.event_date_wrap}>
            <p>{date}</p>
            <span>{month}.{year}</span>
          </div>
        </div>
        <div className={styles.date_description}>
          <h3 >{notice.title}</h3>
          <p >
            {notice.message}
          </p>

          <hr className={styles.event_line} />
        </div>
      </div>
    )
  })




  return (
    <Layout>
      <div className='w-[1210px] mx-auto'>
        <div>
          <h1 className='text-white text-center mb-6'>Notices</h1>
        </div>
        <div className="flex-col ">
          <div className='flex text-white'>
            {/* "inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-green-700 rounded hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 my-6" */}
            <p className='text-white bg-teal-800 hover:bg-teal-900 focus:ring-4 focus:outline-none focus:ring-teal-400 dark:bg-teal-700 dark:hover:bg-teal-700 dark:focus:ring-teal-800 py-4 px-8 border-solid border-2 cursor-pointer' onClick={() => setBatch('')}>General</p>
            <p className='text-white bg-teal-800 hover:bg-teal-900 focus:ring-4 focus:outline-none focus:ring-teal-400 dark:bg-teal-700 dark:hover:bg-teal-700 dark:focus:ring-teal-800 py-4 px-8 border-solid border-2 cursor-pointer' onClick={() => setBatch('first')}>1st</p>
            <p className='text-white bg-teal-800 hover:bg-teal-900 focus:ring-4 focus:outline-none focus:ring-teal-400 dark:bg-teal-700 dark:hover:bg-teal-700 dark:focus:ring-teal-800 py-4 px-8 border-solid border-2 cursor-pointer' onClick={() => setBatch('second')}>2nd</p>
            <p className='text-white bg-teal-800 hover:bg-teal-900 focus:ring-4 focus:outline-none focus:ring-teal-400 dark:bg-teal-700 dark:hover:bg-teal-700 dark:focus:ring-teal-800 py-4 px-8 border-solid border-2 cursor-pointer' onClick={() => setBatch('third')}>3rd</p>
            <p className='text-white bg-teal-800 hover:bg-teal-900 focus:ring-4 focus:outline-none focus:ring-teal-400 dark:bg-teal-700 dark:hover:bg-teal-700 dark:focus:ring-teal-800 py-4 px-8 border-solid border-2 cursor-pointer' onClick={() => setBatch('fourth')}>4th</p>
            <p className='text-white bg-teal-800 hover:bg-teal-900 focus:ring-4 focus:outline-none focus:ring-teal-400 dark:bg-teal-700 dark:hover:bg-teal-700 dark:focus:ring-teal-800 py-4 px-8 border-solid border-2 cursor-pointer' onClick={() => setBatch('ms')}>MS</p>
          </div>

          {content.length ? content : (
            <div className="p-6 border-solid border-2 border-white text-white">
              <div>No Notice Here</div>
            </div>
          )}
        </div>

        {/* <div className='text-center mt-6'>
          <button className=" inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-teal-700 rounded hover:bg-teal-800 focus:ring-4 focus:outline-none focus:ring-teal-300 dark:bg-teal-600 dark:hover:bg-teal-700 dark:focus:ring-teal-800 my-6">
            See More
          </button>
        </div> */}
      </div>

    </Layout >
  )
}

export default notice


