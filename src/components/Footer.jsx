import { FaFacebook, FaInstagram, FaTwitch } from "react-icons/fa"
import { MdEmail } from "react-icons/md"

import { NavLink } from 'react-router-dom'

export default function Footer() {

    const handleForm = (e) => {
        e.preventDefault()
    }

    return (
        <footer className="navba footer text-white navbar-expand-lg bg-body-tertiary">
            <div className="container d-flex flex-wrap gap-3 gap-md-0 justify-content-center justify-content-sm-between">
                <form className="a-zoom1 a-border1" onSubmit={() => handleForm()} >
                    <p className="text-center text-sm-start text-shadow-dark">Do you want to subscribe?</p>
                    <div className="d-flex gap-2">
                        <input type='email' className="rounded m-auto" typeof="text" placeholder="your@email.com" />
                        <MdEmail role='button' type="submit" className="fs-2" />
                    </div>

                </form>

                <div className="d-flex flex-column justify-content-between align-items-center a-zoom1 a-border1">
                    <p className="m-0 text-shadow-dark">Social media</p>
                    <div className="d-flex justify-content-between gap-3 fs-2">
                        <p role='button'> <a className="" href="http://www.instagram.com"><FaInstagram className="a-zoom1 a-border1" /></a> </p>
                        <p role='button'><a className="" href="http://www.facebook.com"><FaFacebook className="a-zoom1 a-border1" /></a> </p>
                        <p role='button'><a className="" href="http://www.twitch.tv"><FaTwitch className="a-zoom1 a-border1" /></a></p>
                    </div>


                </div>
                <div className="d-flex gap-3 justify-content-between a-zoom1 a-border1">
                    <NavLink className="navbar-brand" to="/"><img className='img-fluid logo a-zoom1 a-border1' src="/logo.jpg" alt="logo" /></NavLink>
                    <div className="">
                        <p role='button' className="m-0 a-zoom1 a-border1 text-shadow-dark" ><NavLink className="" to='/about'> About us </NavLink ></p>
                        <p role='button' className="m-0 a-zoom1 a-border1 text-shadow-dark" ><NavLink className="" to='/emailus' >Wanna mail us?</NavLink> </p>
                        <p role='button' className="m-0 a-zoom1 a-border1 text-shadow-dark" ><NavLink className="" to='/terms'>Terms and conditions</NavLink> </p>
                    </div>
                </div>


            </div>

        </footer>
    )
}