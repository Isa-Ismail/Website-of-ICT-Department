import { useState, useEffect } from 'react'
import Layout from '../../components/Layout'
import Link from 'next/link';
const research = () => {

  const [users, setUsers] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://ict-6.vercel.app/api/auth/')
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.log(error)
      }
    }
    fetchData();
  }, [])

  let content = [];

  content = users.filter(user => !user.isFaculty).map(user => (
    <div class="mb-12 lg:mb-0 bg-white p-4 rounded-lg ">
      <img class="rounded-lg shadow-lg mb-6 mx-auto " src="https://mdbootstrap.com/img/Photos/Avatars/img%20(9).jpg"
        alt="avatar" style={{ width: "100%" }} />
      <h5 class="text-lg font-bold mb-4 ">{user.username}</h5>
      <p class="mb-6 text-gray-800 ">{user.designation}</p>
      <Link href={`/research/researchProfile/1`}>See All Articles </Link>
    </div>
  ))




  return (
    <Layout>
      <div class="container my-24 px-6 mx-auto">
        <section class="mb-32 text-gray-800 text-center">
          <h2 class="text-3xl font-bold mb-12">Faculty</h2>
          <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-xl-12">
            {content}
          </div>


        </section>

      </div>

    </Layout>
  )
}

export default research