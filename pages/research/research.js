import Link from 'next/link'
import { useEffect, useState } from 'react'
import Layout from '../../components/Layout'
import styles from '../../styles/Notice.module.css'
const research = () => {
  const [publications, setPublications] = useState([])
  const [publicationYear, setPublicationYear] = useState(2022)
  const [publicationType, setPublicationType] = useState('publication')

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
  let month = ''
  let date = ''

  content = publications
    .filter(publication => {
      const pubYear = new Date(publication.published).getFullYear();
      return (publicationYear === pubYear)
    })
    // .filter(publication => (publicationType === publication.researchType))
    .map(publication => {
      const pubDate = new Date(publication.published).toLocaleDateString();
      return (
        < div key={publication._id}>
          <div className="p-6 border-solid border-2 border-white">
            <h3 className='text-xl '>{publication.title}</h3>
            <h3 className='text-md '>Author : {publication.author}</h3>
            <p className='text-md mt-2'>
              Published Date : {pubDate}
            </p>
            <button className=" inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-teal-700 rounded hover:bg-teal-800 focus:ring-4 focus:outline-none focus:ring-teal-300 dark:bg-teal-600 dark:hover:bg-teal-700 dark:focus:ring-teal-800 mt-3">
              <Link href={publication.url}>Read Full Article </Link>
            </button>

          </div>
        </div >
      )
    }
    )

  console.log(publications)

  return (
    <Layout>

      <div className='w-[1210px] my-6 mx-auto'>
        <div>
          <h1 className='text-white text-center mb-6'>Research</h1>
        </div>
        <div className="flex-col ">
          <div className='flex justify-between'>
            <div className='flex text-white flex-wrap'>
              <p className='text-white bg-teal-700 hover:bg-teal-900 focus:ring-4 focus:outline-none focus:ring-teal-400 py-4 px-8 border-solid border-2 cursor-pointer' onClick={() => setPublicationYear(2022)}>2022</p>
              <p className='text-white bg-teal-700 hover:bg-teal-900 focus:ring-4 focus:outline-none focus:ring-teal-400 py-4 px-8 border-solid border-2 cursor-pointer' onClick={() => setPublicationYear(2021)}>2021</p>
              <p className='text-white bg-teal-700 hover:bg-teal-900 focus:ring-4 focus:outline-none focus:ring-teal-400 py-4 px-8 border-solid border-2 cursor-pointer' onClick={() => setPublicationYear(2020)}>2020</p>
              <p className='text-white bg-teal-700 hover:bg-teal-900 focus:ring-4 focus:outline-none focus:ring-teal-400 py-4 px-8 border-solid border-2 cursor-pointer' onClick={() => setPublicationYear(2019)}>2019</p>
              <p className='text-white bg-teal-700 hover:bg-teal-900 focus:ring-4 focus:outline-none focus:ring-teal-400 py-4 px-8 border-solid border-2 cursor-pointer' onClick={() => setPublicationYear(2018)}>2018</p>
              <p className='text-white bg-teal-700 hover:bg-teal-900 focus:ring-4 focus:outline-none focus:ring-teal-400 py-4 px-8 border-solid border-2 cursor-pointer' onClick={() => setPublicationYear(2017)}>2017</p>
            </div>
            <div className='flex text-white'>
              <p className='text-white bg-teal-700 hover:bg-teal-900 focus:ring-4 focus:outline-none focus:ring-teal-400 py-4 px-8 border-solid border-2 cursor-pointer' onClick={() => setPublicationType('publication')}>publications</p>
              <p className='text-white bg-teal-700 hover:bg-teal-900 focus:ring-4 focus:outline-none focus:ring-teal-400 py-4 px-8 border-solid border-2 cursor-pointer' onClick={() => setPublicationType('journal')}>journals</p>
            </div>
          </div>
          {content.length ? content : (
            <div className="p-6 border-solid border-2 border-white text-white">
              <div>No Publications  Here</div>
            </div>
          )}

        </div>
      </div>

    </Layout >
  )
}

export default research