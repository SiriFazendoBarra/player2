import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button'

import { FaHeart, FaShoppingCart, FaStore, FaHouseUser } from 'react-icons/fa'
import { ImExit, ImUser, ImUserPlus } from 'react-icons/im'

import { NavLink, useNavigate } from 'react-router-dom';
import { useLoginContext } from '../context/LoginContext';
import { useCartContext } from '../context/CartContext';
import { useSearchContext } from '../context/SearchContext';
import { useState } from 'react';

export default function NavBar() {

    const { user, Logout } = useLoginContext()
    const { cart, cartAmount } = useCartContext()
    const { setSearchBar, setCategories } = useSearchContext()
    const [inputBar, setInputBar] = useState("")
    const navigate = useNavigate()

    const handleSearchClick = (e, inputBar) => {
        e.preventDefault()
        setSearchBar(inputBar)
    }

    const handleLogoClick = () => {
        setSearchBar("")
        setCategories("")
    }
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-dark text-white">
                <div className="container d-flex justify-content-between flex-wrap">

                    <NavLink className="col-1 navbar-brand" to="/" onClick={() => handleLogoClick()}><img className="img-fluid logo a-zoom1 a-box-border1" src="/logo.jpg" alt="logo" /></NavLink>

                    <button className="navbar-toggler bg-light " type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <form className='d-flex justify-content-center flex-wrap col-12 col-lg-5 a-zoom1 a-box-border1 searchBar rounded ' action="" onSubmit={(e) => handleSearchClick(e, inputBar)}>
                        <input
                            className='col-12 col-md-9 rounded'
                            placeholder="What are you seeking for?"
                            onChange={(e) => setInputBar(e.target.value)}
                        />
                        <button className='col-12 col-md-3 bg-light rounded' variant="outline-secondary" id="button-addon2" type='submit' >Search</button>
                    </form>
                    {user.logged ?
                        <p className='m-0 h5 a-zoom1 a-border1 text-center text-lg-end text-xl-center text-shadow-dark col-12 col-lg-4' role="button" onClick={() => navigate("/profile")}>Hi, {user.name}</p>
                        : null}
                    <div className="collapse navbar-collapse " id="navbarNav">
                        <div className='d-flex gap-3 ms-auto'>

                            {!user.logged ? <NavLink className="my-auto " to="/login"><ImUser /> </NavLink> : null}
                            {!user.logged ? <NavLink className="my-auto " to="/register"><ImUserPlus /></NavLink> : null}
                            {user.logged ?
                                <div className='' >
                                    <NavLink className="my-auto position-relative " to="/cart">
                                        <FaShoppingCart />
                                        {cart.length > 0 ? <span className="cart-count position-absolute top-0 start-50 translate-middle badge border border-light rounded-circle bg-danger p-2">
                                            {cartAmount}
                                        </span>
                                            : null}

                                    </NavLink>
                                </div>
                                :
                                null}
                            {user.logged ? <NavLink className="my-auto" to="/publications"> <FaStore /></NavLink> : null}
                            {user.logged ? <NavLink className="my-auto" to="/favorites"><FaHeart /></NavLink> : null}
                            {user.logged ? <NavLink className="my-auto" to="/login" onClick={() => Logout()}><ImExit /></NavLink> : null}

                        </div>
                    </div>

                </div>

            </nav>
            {/* <Navbar className='NavBar bg-dark text-white'>
                <Container className='d-flex justifycontent-between gap-3 gap-md-0 flex-wrap'>
                    <NavLink className="navbar-brand animation-zoom" to="/" onClick={() => handleLogoClick()}><img className='img-fluid logo' src="/logo.jpg" alt="logo" /></NavLink>
                    <form className='d-flex col-12 col-md-4 animation-zoom-card' action="" onSubmit={(e) => handleSearchClick(e, inputBar)}>
                        <div className='input-group col-8'>
                            <input
                                className='my-auto form-control'
                                placeholder="Do you want to search something?"
                                aria-describedby="basic-addon2"
                                onChange={(e) => setInputBar(e.target.value)}
                            />
                            <Button className='my-auto' variant="outline-secondary" id="button-addon2" type='submit' >Search</Button>
                        </div>
                    </form>
                    {user.name ?
                        <p className='m-0 h5 a-zoom1 a-border1 text-shadow-dark'>Hi, {user.name}</p>
                        : null}

                    <Nav className="Nav d-flex gap-3">
                        {!user.logged ? <NavLink className="my-auto animation-zoom" to="/login"><ImUser /> </NavLink> : null}
                        {!user.logged ? <NavLink className="my-auto animation-zoom" to="/register"><ImUserPlus /></NavLink> : null}
                        {user.logged ? <NavLink className="my-auto animation-zoom" to="/profile"><FaHouseUser /></NavLink> : null}
                        {user.logged ?
                            <div className='animation-zoom' >
                                <NavLink className="my-auto position-relative animation-zoom" to="/cart">
                                    <FaShoppingCart />
                                    {cart.length > 0 ? <span className="cart-count position-absolute top-0 start-50 translate-middle badge border border-light rounded-circle bg-danger p-2">
                                        {cartAmount}
                                    </span>
                                        : null}

                                </NavLink>
                            </div>
                            :
                            null}
                        {user.logged ? <NavLink className="my-auto" to="/publications"> <FaStore /></NavLink> : null}
                        {user.logged ? <NavLink className="my-auto" to="/favorites"><FaHeart /></NavLink> : null}
                        {user.logged ? <NavLink className="my-auto" to="/login" onClick={() => Logout()}><ImExit /></NavLink> : null}

                    </Nav>
                </Container>
            </Navbar> */}
        </>


    )
}