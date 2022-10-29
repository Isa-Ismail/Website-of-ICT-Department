import Link from 'next/link'
import { useEffect, useState } from 'react'
import Layout from '../../components/Layout'
import styles from '../../styles/Notice.module.css'
const research = () => {
  const [publications, setPublications] = useState([])
  const [year, setYear] = useState(2022)
  const [type, setType] = useState('publications')

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://ict-6.vercel.app/api/publications/')
        const data = await response.json();
        setPublications(data);
      } catch (error) {
        console.log(error)
      }
    }
    fetchData();
  }, [])

  let content = [];
  let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  let created_date = '';
  let publicationYear = ''
  let month = ''
  let date = ''

  content = publications.filter(user => !user.isFaculty).map(publication => (
    <div>
      <div className="p-6 border-solid border-2 border-white">
        <h3 className='text-xl '>research title</h3>
        <p className='text-md mt-2'>
          Published Date :
        </p>
        <button className=" inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-teal-700 rounded hover:bg-teal-800 focus:ring-4 focus:outline-none focus:ring-teal-300 dark:bg-teal-600 dark:hover:bg-teal-700 dark:focus:ring-teal-800 mt-3">
          <Link href={`#`}>Read Full Article </Link>
        </button>
        <hr className={'mt-2'} />
      </div>
    </div>
  ))




  return (
    <Layout>

      <div className='w-[1210px] mt-6 mx-auto'>
        <div>
          <h1 className='text-white text-center mb-6'>Notices</h1>
        </div>
        <div className="flex-col ">
          <div className='flex justify-between'>
            <div className='flex text-white flex-wrap'>
              <p className='text-white bg-teal-800 hover:bg-teal-900 focus:ring-4 focus:outline-none focus:ring-teal-400 dark:bg-teal-700 dark:hover:bg-teal-700 dark:focus:ring-teal-800 py-4 px-8 border-solid border-2 cursor-pointer' onClick={() => setYear(2022)}>2022</p>
              <p className='text-white bg-teal-800 hover:bg-teal-900 focus:ring-4 focus:outline-none focus:ring-teal-400 dark:bg-teal-700 dark:hover:bg-teal-700 dark:focus:ring-teal-800 py-4 px-8 border-solid border-2 cursor-pointer' onClick={() => setYear(2021)}>2021</p>
              <p className='text-white bg-teal-800 hover:bg-teal-900 focus:ring-4 focus:outline-none focus:ring-teal-400 dark:bg-teal-700 dark:hover:bg-teal-700 dark:focus:ring-teal-800 py-4 px-8 border-solid border-2 cursor-pointer' onClick={() => setYear(2020)}>2020</p>
              <p className='text-white bg-teal-800 hover:bg-teal-900 focus:ring-4 focus:outline-none focus:ring-teal-400 dark:bg-teal-700 dark:hover:bg-teal-700 dark:focus:ring-teal-800 py-4 px-8 border-solid border-2 cursor-pointer' onClick={() => setYear(2019)}>2019</p>
              <p className='text-white bg-teal-800 hover:bg-teal-900 focus:ring-4 focus:outline-none focus:ring-teal-400 dark:bg-teal-700 dark:hover:bg-teal-700 dark:focus:ring-teal-800 py-4 px-8 border-solid border-2 cursor-pointer' onClick={() => setYear(2018)}>2018</p>
              <p className='text-white bg-teal-800 hover:bg-teal-900 focus:ring-4 focus:outline-none focus:ring-teal-400 dark:bg-teal-700 dark:hover:bg-teal-700 dark:focus:ring-teal-800 py-4 px-8 border-solid border-2 cursor-pointer' onClick={() => setYear(2017)}>2017</p>
            </div>
            <div className='flex text-white'>
              <p className='text-white bg-teal-800 hover:bg-teal-900 focus:ring-4 focus:outline-none focus:ring-teal-400 dark:bg-teal-700 dark:hover:bg-teal-700 dark:focus:ring-teal-800 py-4 px-8 border-solid border-2 cursor-pointer' onClick={() => setType('')}>publications</p>
              <p className='text-white bg-teal-800 hover:bg-teal-900 focus:ring-4 focus:outline-none focus:ring-teal-400 dark:bg-teal-700 dark:hover:bg-teal-700 dark:focus:ring-teal-800 py-4 px-8 border-solid border-2 cursor-pointer' onClick={() => setType('first')}>journals</p>
            </div>
          </div>

          {content}

        </div>
      </div>

    </Layout >
  )
}

export default research