import { useRouter } from 'next/router'
import React from 'react'
import Layout from '../../components/Layout'

const Person = () => {
    const { id } = useRouter().query
    console.log(id)

    return (
    <Layout>
        
    </Layout>
  )
}

export default Person