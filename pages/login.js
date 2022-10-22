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
import { useRouter } from 'next/router'

const Login = () => {

  const { enqueueSnackbar, closeSnackbar } = useSnackbar()
<<<<<<< HEAD
  const router = useRouter()
  const { state, dispatch } = useContext(Store)
=======

  const router = useRouter()

  const { state, dispatch } = useContext(Store)

>>>>>>> 8b77d35260d3386a04c59758b1dd1f94dfcabeff
  const [form, setForm] = useState(
    {
      email: '',
      password: ''
    }
  )

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const response = await signin(form.email, form.password)
    if (response.id) {
      dispatch({ type: 'LOGIN', payload: response.token })
      fetch(`https://ict-6.vercel.app/api/auth/${response.id}`).then(res => res.json()).then(data => {
        dispatch({ type: 'USER', payload: data })
      })
      enqueueSnackbar(`Welcome to ICT department ${state.userInfo && state.userInfo.username}`, { variant: 'success' })
      router.push("/")
    } else {
      dispatch({ type: 'ERROR', payload: response.message })
      enqueueSnackbar('Wrong credentials', { variant: 'error' })
    }
    console.log(response)
  }

  return (
<<<<<<< HEAD
    <>
      {/* <Layout>
        <div className='my-[10rem] min-h-screen'>
          <div className="flex justify-center">
            <div className="bg-gradient-to-t from-cyan-300 via-cyan-200 to-cyan-200 rounded-lg space-y-5 py-5 px-10">
              <div>
                <div className="flex justify-center p-8">
                  <h1 className="text-black">Login</h1>
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
      </Layout> */}


      <Layout>
        <div className='my-[10rem] min-h-screen'>
          <div className=' flex justify-center'>


            <div class="p-4 w-full max-w-sm bg-white rounded-lg border border-gray-200 shadow-md sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
              <form class="space-y-6" action="#">
                <h5 class="text-xl font-medium text-gray-900 dark:text-white">Sign in to our platform</h5>
                <div>
                  <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
                  <input type="email" value={form.email}
                    onChange={handleChange} name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@company.com" required="" />
                </div>
                <div>
                  <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your password</label>
                  <input type="password" value={form.password}
                    onChange={handleChange} name="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required="" />
                </div>
                <div class="flex items-start">
                  <div class="flex items-start">
                    <div class="flex items-center h-5">
                      <input id="remember" type="checkbox" value="" class="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" required="" />
                    </div>
                    <label for="remember" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
                  </div>
                  <a href="#" class="ml-auto text-sm text-blue-700 hover:underline dark:text-blue-500">Lost Password?</a>
                </div>
                <button type="submit" class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={handleSubmit}>Login to your account</button>
                <div class="text-sm font-medium text-gray-500 dark:text-gray-300">
                  Not registered? <Link href="/register" class="text-blue-700 hover:underline dark:text-blue-500">Create account</Link>
                </div>
              </form>
            </div>
          </div>
        </div>

      </Layout>
    </>
=======
    <Layout>
      <div className='my-[10rem] min-h-screen'>
        <div className="flex justify-center">
          <div className="bg-gradient-to-t from-cyan-300 via-cyan-200 to-cyan-200 rounded-lg space-y-5 py-5 px-10">
            <div>
              <div className="flex justify-center p-8">
                <h1 className="text-black">Login</h1>
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
>>>>>>> 8b77d35260d3386a04c59758b1dd1f94dfcabeff
  )
}

export default Login