import { LocationCitySharp, Logout, MailOutline, Phone } from '@mui/icons-material'
import { Avatar, TextField, Button } from '@mui/material'
import { useRouter } from 'next/router'
import React, { useContext, useEffect } from 'react'
import { useState } from 'react'
import Layout from '../components/Layout'
import { Store } from '../utils/store'

const Dash = () => {

    const router = useRouter ()

    const {state, dispatch} = useContext(Store)
    console.log(state.userInfo._id)

    const handleChangePub = (e) => {
        setPub({
            ...pub, [e.target.name]: e.target.value
        })
    }

    const [pub, setPub] = useState({
        title: '',
        author: '',
        published: '',
        userId: state.userInfo._id,
        url: ''
    })

    const [notice, setNotice] = useState({
        title: '',
        message: '',
        regards: '',
        userId: state.userInfo._id,
    })

    const handleChangeNotice = (e) => {
        setNotice({
            ...notice, [e.target.name]: e.target.value
        })
    }

    console.log(pub)

    useEffect(()=> {
        if(!state.userInfo){
            router.push("/login")
        }
    }, [state.userInfo])
    
    return (
    <Layout>
        <div className="flex">
            <div className="w-[20rem] bg-slate-800 min-h-screen mt-[5.6rem]">
                <div className="p-4 flex space-x-4 items-center">
                    <Avatar />
                    <p>{state.userInfo.username}</p>
                </div>
                <div className="p-4 flex space-x-4 items-center">
                    <p><MailOutline /> {state.userInfo.email}</p>
                </div>
                <div className="p-4 flex space-x-4 items-center">
                    <p><LocationCitySharp /> {state.userInfo.city}</p>
                </div>
                <div className="p-4 flex space-x-4 items-center">
                    <p><Phone /> {state.userInfo.phone}</p>
                </div>
                <div className="p-4 flex space-x-4 items-center cursor-pointer">
                    <p onClick={()=> {dispatch({type: "CLEAR_USER"}); router.push("/login")} }><Logout/> Log out</p>
                </div>
            </div>
            <div className="min-h-screen mt-22 w-screen bg-slate-200 flex justify-evenly"> 
                <div className='p-20 space-y-10'>
                <div>
                    <h1 className="text-black">Update Notices</h1>
                </div>
                    <div className="">
                    <TextField  
                    className="w-[20rem]"
                    label="Title" 
                    variant="outlined"
                    name='email'
                    multiline
                    value=''
                    onChange={()=>{}}
                    />
                    </div>
                    <div className="">
                    <TextField 
                    className="w-[20rem]"
                    id="outlined-multiline-static"
                    label="Brief"
                    multiline
                    rows={4}
                    placeholder="Type here"
                    />
                    </div>
                    <div className="">
                    <TextField  
                    className="w-[20rem]"
                    label="Regards" 
                    variant="outlined"
                    name='email'
                    multiline
                    value=''
                    onChange={()=>{}}
                    />
                    </div>
                  <div className="flex py-4">
                    <Button className="bg-blue-400" onClick={()=>{}} variant="contained">Post</Button>
                  </div>
                </div>
                <div className='p-20 space-y-10'>
                <div>
                    <h1 className="text-black">Update publications</h1>
                </div>
                    <div className="">
                    <TextField  
                    className="w-[20rem]"
                    label="Title" 
                    placeholder='publication title'
                    variant="outlined"
                    name='title'
                    value={pub.title}
                    multiline
                    onChange={handleChangePub}
                    />
                    </div>
                    <div className="">
                    <TextField  
                    className="w-[20rem]"
                    label="Author" 
                    placeholder='Author name'
                    variant="outlined"
                    name='author'
                    multiline
                    value={pub.author}
                    onChange={handleChangePub}
                    />
                    </div>
                    <div className="">
                    <TextField  
                    className="w-[20rem]"
                    label="url" 
                    placeholder='https://yourwebsitesurl.com'
                    variant="outlined"
                    name='url'
                    multiline
                    value={pub.url}
                    onChange={handleChangePub}
                    />
                    </div>
                    <div className="flex items-center space-x-4">
                    <label>
                        Published date
                    </label>
                    <TextField  
                    className="w-[12rem]"
                    type="date"
                    name="published"
                    value={pub.published}
                    onChange={handleChangePub}
                    />
                    </div>
                  <div className="flex py-4">
                    <Button className="bg-blue-400" onClick={()=>{}} variant="contained">Post</Button>
                  </div>
                </div>
            </div>
        </div>
    </Layout>
  )
}

export default Dash