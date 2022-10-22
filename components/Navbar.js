import React, { useEffect, useState } from 'react'
import { AppBar, Avatar } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import Button from '@mui/material/Button'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Image from 'next/image'
import Logo from '../public/img/bup.png'
import Link from 'next/link'
import LoginRoundedIcon from '@mui/icons-material/LoginRounded'
import { styled } from '@mui/material/styles'
import Tooltip, { TooltipProps, tooltipClasses } from '@mui/material/Tooltip'
import { useContext } from 'react'
import { Logout, LogoutRounded } from '@mui/icons-material'
import { Store } from '../utils/store'

const Navbar = () => {

    useEffect(() => {
        window.addEventListener("scroll", handlenavBgOnScroll);
        return () => window.removeEventListener("scroll", handlenavBgOnScroll)
    },)

    const { state, dispatch } = useContext(Store)

    const [navBgOnScroll, setNavBgOnScroll] = useState(false)
    const [anchorEl, setAnchorEl] = React.useState(null)
    const open = Boolean(anchorEl)
    const handlenavBgOnScroll = () => {
        if (window.scrollY >= 50) {
            setNavBgOnScroll(true);
        } else {
            setNavBgOnScroll(false);
        }
    }

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget)
    };
    const handleClose = () => {
        setAnchorEl(null)
    }

    const LightTooltip = styled(({ className, ...props }) => (
        <Tooltip {...props} classes={{ popper: className }} />
    ))(({ theme }) => ({
        [`& .${tooltipClasses.tooltip}`]: {
            backgroundColor: theme.palette.common.white,
            color: 'rgba(0, 0, 0, 0.87)',
            boxShadow: theme.shadows[1],
            fontSize: 11,
        },
    }))

    const about = (
        <div>
            <div className='space-y-5 p-5'>
                <p className='text-black'><Link href="/about">Our history</Link></p>
                <p className='text-black'><Link href="/about">Gallery</Link></p>
            </div>
        </div>
    )

    const people = (
        <div>
            <div className='space-y-5 p-5'>
                <p className='text-black'><Link href="/admin">Admin people</Link></p>
                <p className='text-black'><Link href="/people">Faculty members</Link></p>
            </div>
        </div>
    )

    const login = (
        <div>
            <div className='space-y-5 p-5'>
                <Link href="/dashboard"><p className='text-black flex items-center space-x-2 hover:cursor-pointer'><Avatar /> <span>Profile</span></p></Link>
                <Link href="/" ><p onClick={() => dispatch({ type: "CLEAR_USER" })} className='text-black flex items-center space-x-2 hover:cursor-pointer'><LogoutRounded />Log out</p></Link>
            </div>
        </div>
    )

    return (
        <div>
            <AppBar className={navBgOnScroll ? '!bg-slate-800 !transition-all !ease-in-out !duration-500' : '!bg-transparent !transition-all !ease-in-out !duration-500'}>
                <div className="flex md:px-[10rem] sm:px-4 py-5 items-center">

                    <div className="hover:cursor-pointer">
                        <Link href="/">
                            <div className='flex items-center space-x-4'>
                                <Image src={Logo} height={40} width={40} />
                                <span className="self-center text-xl font-medium whitespace-nowrap dark:text-white">BUP | ICT</span>
                            </div>
                        </Link>
                    </div>

                    <div className='flex-grow'></div>

                    <div className="md:flex space-x-10 sm:hidden">

                        <div>
                            <Link href="/"><p className="hover:cursor-pointer">Home</p></Link>
                        </div>
                        <div>
                            <Link href="/research/research"><p className="hover:cursor-pointer">Research</p></Link>
                        </div>
                        <div>
                            <Link href="/notice"><p className="hover:cursor-pointer">News</p></Link>
                        </div>
                        <div>
                            <Link href="/notice"><p className="hover:cursor-pointer">Notice</p></Link>
                        </div>
                        <div>
                            <LightTooltip title={about}>
                                <p className="hover:cursor-pointer">About</p>
                            </LightTooltip>
                        </div>
                        <div>
                            <LightTooltip title={people}>
                                <p className="hover:cursor-pointer">People</p>
                            </LightTooltip>
                        </div>

                    </div>

                    <div className='flex-grow'></div>

                    {state.userInfo.username ? (<div>
                        <LightTooltip title={login}>
                            <p className="hover:cursor-pointer flex items-center space-x-5"><Avatar /> <span>{state.userInfo.username}</span></p>
                        </LightTooltip>
                    </div>) : (<div className="md:flex sm:hidden">
                        <div className="flex space-x-10">
                            <Link href="/login"><p className="px-3 py-1 rounded-md cursor-pointer"><LoginRoundedIcon /> Login </p></Link>
                        </div>
                    </div>)}

                    <div className="md:hidden">
                        <div>
                            <Button
                                id="basic-button"
                                aria-controls={open ? 'basic-menu' : undefined}
                                aria-haspopup="true"
                                aria-expanded={open ? 'true' : undefined}
                                onClick={handleClick}
                            >
                                <MenuIcon className="text-white" />
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
                            </Menu>
                        </div>
                    </div>

                </div>
            </AppBar>
        </div>
    )
}

export default Navbar