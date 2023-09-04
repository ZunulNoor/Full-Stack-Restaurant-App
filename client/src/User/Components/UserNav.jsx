import React, { useContext } from 'react'
import {BsCart4} from 'react-icons/bs'
import { GlobalContext } from '../../Context/context'
import Cookies from 'js-cookie';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { decodeToken } from 'react-jwt'
import { Link } from 'react-router-dom';


export default function UserNav() {

    const { state, dispatch } = useContext(GlobalContext)
    const currentUser = decodeToken(state.token)

    return (
        <>
            <Navbar expand="lg" className="guestnav">
                <Container fluid>
                    <Navbar.Brand href="/" className="eb text-white ms-5">Eastern Bites</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="ms-auto  my-lg-0 me-5"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Link to='/profile' className="btn btn-outline-dark text-light text-decoration-none fst-italic fw-bold me-4 d-flex align-items-center gap-2">
                                <img src="https://cdn.pixabay.com/photo/2019/08/11/18/59/icon-4399701_1280.png" style={{ height: '30px', objectFit: 'contain' }} alt="" />
                                {currentUser.username}
                            </Link>
                            <div className='mt-2 me-2 ' >
                                <Link className="btn btn-outline-dark" to='/cart'><BsCart4 /></Link>
                            </div>
                            <Nav.Link href="">
                                <button className="btn btn-outline-dark"
                                    onClick={() => {
                                        Cookies.remove('token')
                                        dispatch({ type: "USER_LOGOUT" })
                                    }}
                                >Sign Out</button>
                            </Nav.Link>

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}