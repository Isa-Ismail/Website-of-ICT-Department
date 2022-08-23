import React from 'react'
import { AppBar } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import Button from '@mui/material/Button'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Image from 'next/image'
import Logo from '../public/img/bup.png'
import Link from 'next/link'

const Navbar = () => {

    const [anchorEl, setAnchorEl] = React.useState(null)
    const open = Boolean(anchorEl)
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget)
    };
    const handleClose = () => {
      setAnchorEl(null)
    }

    return (
            <AppBar position="fixed">

                <div className="flex md:px-[10rem] sm:px-4 py-5 items-center bg-blue-900">

                    <div className="hover:cursor-pointer">
                        <Link href="/"><Image src={Logo} height={50} width={50} /></Link>
                    </div>

                    <div className='flex-grow'></div>

                    <div className="md:flex space-x-10 sm:hidden">

                        <div>
                            <Link href="/"><p className="hover:underline hover:cursor-pointer text-white">Home</p></Link>
                        </div>
                        <div>
                            <Link href="/"><p className="hover:underline hover:cursor-pointer text-white">Papers</p></Link>
                        </div>
                        <div>
                            <Link href="/"><p className="hover:underline hover:cursor-pointer text-white">News</p></Link>
                        </div>
                        <div>
                            <Link href="/"><p className="hover:underline hover:cursor-pointer text-white">Notice</p></Link>
                        </div>
                        <div>
                            <Link href="/"><p className="hover:underline hover:cursor-pointer text-white">About</p></Link>
                        </div>

                    </div>
                    
                    <div className='flex-grow'></div>

                    <div className="md:flex sm:hidden">
                        <div className="flex space-x-10">
                            <Link href="/login"><p className="px-3 py-1 bg-green-700 text-white rounded-md cursor-pointer">Login</p></Link>
                            <Link href="/register"><p className="px-3 py-1 bg-green-700 text-white rounded-md cursor-pointer">Register</p></Link>
                        </div>
                    </div>
                    <div className="md:hidden">
                        <div>
                            <Button
                                id="basic-button"
                                aria-controls={open ? 'basic-menu' : undefined}
                                aria-haspopup="true"
                                aria-expanded={open ? 'true' : undefined}
                                onClick={handleClick}
                            >
                                <MenuIcon className="text-green-700" />
                            </Button>
                            <Menu
                                id="basic-menu"
                                anchorEl={anchorEl}
                                open={open}
                                onClose={handleClose}
                                MenuListProps={{
                                'aria-labelledby': 'basic-button',
                                }}
                            >
                                <MenuItem onClick={handleClose}>Home</MenuItem>
                                <MenuItem onClick={handleClose}>Papers</MenuItem>
                                <MenuItem onClick={handleClose}>News</MenuItem>
                                <MenuItem onClick={handleClose}>Notices</MenuItem>
                                <MenuItem onClick={handleClose}>About</MenuItem>
                                <Link href="/login"><MenuItem onClick={handleClose}>Login</MenuItem></Link>
                                <Link href="/register"><MenuItem onClick={handleClose}>Register</MenuItem></Link>
                            </Menu>
                        </div>
                    </div>

                </div>

            </AppBar>
  )
}

export default Navbar