import React, { useState } from 'react'
import Layout from '../components/Layout'
import TextField from '@mui/material/TextField'
import { Button } from '@mui/material'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Link from 'next/link';
import { signin } from '../utils/fetcher';

const login = () => {
  const [form, setForm] = useState (
    {
      email: '',
      password: ''
    }
  )

  const handleChange = (e) => {
    setForm( {...form, [e.target.name]: e.target.value} )
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const response = await signin(email, password)
    dispatch({ type: 'REGISTER', payload: response.message})
    console.log(response.message)
  }

  return (
    <Layout>
        <div className='my-[10rem] min-h-screen'>
            <div className="flex justify-center">
              <div className="bg-gradient-to-t from-cyan-300 via-cyan-200 to-cyan-200 rounded-lg space-y-5 py-5 px-10">   
                  <div>
                    <div className="flex justify-center p-8">
                      <LockOutlinedIcon className='bg-gradient-to-t from-fuchsia-300 via-pink-200 to-fuchsia-200 text-[6rem] rounded-full p-2' />
                    </div>
                    <TextField
                    label="Email" variant="outlined"
                    className="w-[25rem]"
                    name='email'
                    multiline
                    maxRows={4}
                    value={form.email}
                    onChange={handleChange}
                    />
                  </div>
                  <div>
                    <TextField
                    label="Password" variant="outlined"
                    className="w-[25rem]"
                    type="password"
                    name='password'
                    multiline
                    maxRows={4}
                    value={form.password}
                    onChange={handleChange}
                    />
                  </div>
                  <div className="flex justify-center py-4">
                    <Button className="bg-blue-400" onClick={handleSubmit} variant="contained">Submit</Button>
                  </div>
                  <Link href="/register" >Dont have an account? Register here</Link>
              </div>
            </div>
        </div>
    </Layout>
  )
}

export default login