import React from 'react'
import { Navbar, Button, Link, } from "@nextui-org/react";


function MyNavbar() {
    return (

        <Navbar variant="sticky" maxWidth={'fluid'}>
            <Navbar.Brand>
                <Link href="/">
                    <span className='font-bold text-xl'>Relier</span>
                </Link>
            </Navbar.Brand>
            <Navbar.Content hideIn="xs" variant="underline">
                <Navbar.Link href="#">Following</Navbar.Link>
                <Navbar.Link isActive href="#">For You</Navbar.Link>
            </Navbar.Content>
            <Navbar.Content>
                <Navbar.Link color="inherit" href="/login">
                    <Button auto flat as={Link} href="/login">
                        Login | Sign Up
                    </Button>
                </Navbar.Link>
            </Navbar.Content>
        </Navbar>

    )
}

export default MyNavbar