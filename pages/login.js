import React, { useState } from 'react'
import Layout from '../components/Layout'
import TextField from '@mui/material/TextField'
import { Button } from '@mui/material'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Link from 'next/link';
import { signin } from '../utils/fetcher';
import { useContext } from 'react';
import { Store } from '../utils/store';
import { useSnackbar } from 'notistack'

const Login = () => {

  const { enqueueSnackbar, closeSnackbar } = useSnackbar()

  const {state, dispatch} = useContext(Store)

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
    const response = await signin(form.email, form.password)
    if(response.token){
      dispatch({ type: 'LOGIN', payload: response.token})
      enqueueSnackbar('Welcome to ICT department', {variant: 'success'})
    }else{
      dispatch({ type: 'ERROR', payload: response.message})
      enqueueSnackbar('Wrong credentials', {variant: 'error'})
    }
    console.log(response)
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
                      margin="normal"
                      required
                      fullWidth
                      name="password"
                      label="Password"
                      value={form.password}
                      onChange={handleChange}
                      type="password"
                      id="password"
                      autoComplete="current-password"
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

export default Login