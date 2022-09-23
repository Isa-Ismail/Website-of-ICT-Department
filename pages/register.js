import React, { useState } from 'react'
import Layout from '../components/Layout'
import TextField from '@mui/material/TextField'
import { Button } from '@mui/material'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import Link from 'next/link'
import { signup } from '../utils/fetcher'
import { useContext } from 'react'
import { Store } from '../utils/store'

const login = () => {

  const {state, dispatch} = useContext(Store)
  console.log(state)

  const [form, setForm] = useState (
    {
      username:'',
      email: '',
      password: '',
      city: '',
      country: '',
      phone: ''
    }
  )
  
  const {
    username,
    email,
    password,
    phone,
    city,
    country
  } = form

  const handleChange = (e) => {
    setForm( {...form, [e.target.name]: e.target.value} )
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const response = await signup(username, email, password, phone, country, city)
    dispatch({ type: 'REGISTER', payload: response.message})
    setForm( {
      username:'',
      email: '',
      password: '',
      city: '',
      country: '',
      phone: ''
    } )
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
                    label="Username" variant="outlined"
                    className="w-[25rem]"
                    name='username'
                    multiline
                    maxRows={4}
                    value={form.username}
                    onChange={handleChange}
                    />
                  </div>
                
                  <div>
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
                  <div>
                    <TextField
                    label="Enter your City" variant="outlined"
                    className="w-[25rem]"
                    name='city'                 
                    multiline
                    maxRows={4}
                    value={form.city}
                    onChange={handleChange}
                    />
                  </div>
                  <div>
                    <TextField
                    label="Enter your country" variant="outlined"
                    className="w-[25rem]"
                    name='country'                    
                    multiline
                    maxRows={4}
                    value={form.country}
                    onChange={handleChange}
                    />
                  </div>
                  <div>
                    <TextField
                    label="Enter contact number" variant="outlined"
                    className="w-[25rem]"
                    name='phone'                   
                    multiline
                    maxRows={4}
                    value={form.phone}
                    onChange={handleChange}
                    />
                  </div>
                  <div className="flex justify-center py-10">
                    <Button type='submit' onClick={handleSubmit} className="bg-blue-400" variant="contained">Submit</Button>
                  </div>
                  <Link href="/login" >Already registerd? Login here</Link>
              </div>
            </div>
        </div>
    </Layout>
  )
}

export default login