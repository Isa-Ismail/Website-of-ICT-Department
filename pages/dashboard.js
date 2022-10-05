import { Avatar } from '@mui/material'
import { useRouter } from 'next/router'
import React, { useContext, useEffect } from 'react'
import Layout from '../components/Layout'
import { Store } from '../utils/store'

const Dash = () => {

    const {state, dispatch} = useContext(Store)
    console.log(state.userInfo)

    useEffect(()=> {
        !state.userInfo&&useRouter().push("/login")
    }, [state.userInfo])
    
    return (
    <Layout>
        <div className="flex">
            <div className="w-[20rem] bg-sky-300 min-h-screen mt-24">
                <div className="p-10 flex justify-evenly items-center">
                    <Avatar />
                    <p>{state.userInfo.username}</p>
                </div>
            </div>
            <div className="bg-white min-h-screen mt-24 w-screen">
                <div>

                </div>
            </div>
        </div>
    </Layout>
  )
}

export default Dash