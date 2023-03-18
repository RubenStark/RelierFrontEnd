import React from 'react'
import Avatar from './avatar'

import { BiMessageRounded } from 'react-icons/bi'


import { Navbar, Button, Link, Text, useTheme } from "@nextui-org/react";


function MyNavbar() {
    return (

            <Navbar variant="sticky">
                <Navbar.Brand>
                    <span className='font-bold text-xl'>Relier</span>
                </Navbar.Brand>
                <Navbar.Content hideIn="xs" variant="underline">
                    <Navbar.Link href="#">Following</Navbar.Link>
                    <Navbar.Link isActive href="#">For You</Navbar.Link>
                </Navbar.Content>
                <Navbar.Content>
                    <Navbar.Link color="inherit" href="#">
                        Login
                    </Navbar.Link>
                    <Navbar.Item>
                        <Button auto flat as={Link} href="#">
                            Sign Up
                        </Button>
                    </Navbar.Item>
                </Navbar.Content>
            </Navbar>

    )
}

export default MyNavbar