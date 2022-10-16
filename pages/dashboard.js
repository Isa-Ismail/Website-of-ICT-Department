import { Logout } from '@mui/icons-material'
import { Avatar } from '@mui/material'
import { useRouter } from 'next/router'
import React, { useContext, useEffect } from 'react'
import Layout from '../components/Layout'
import { Store } from '../utils/store'

const Dash = () => {

    const router = useRouter ()

    const {state, dispatch} = useContext(Store)
    console.log(state.userInfo)

    useEffect(()=> {
        !state.userInfo&&router.push('/login')
    }, [state.userInfo])
    
    return (
    <Layout>
        <div className="flex">
            <div className="w-[20rem] bg-slate-800 min-h-screen mt-24">
                <div className="p-10 flex justify-evenly items-center">
                    <Avatar />
                    <p>{state.userInfo.username}</p>
                </div>
                <div className="p-10 flex justify-evenly items-center">
                    <p><Logout/> Log out</p>
                </div>
            </div>
            <div className="min-h-screen mt-24 w-screen bg-slate-600">
                <div>

                </div>
            </div>
        </div>
    </Layout>
  )
}

export default Dash