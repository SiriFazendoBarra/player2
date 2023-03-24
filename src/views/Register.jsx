import { useState } from "react"
import { useRegisterContext } from "../context/RegisterContext"


export default function Register() {
    const { addUser, spanEmail, setSpanEmail } = useRegisterContext()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [name, setName] = useState("name")
    const [confirmPass, setConfirmPass] = useState("")
    const [spanPass, setSpanPass] = useState(false)

    const handleRegister = (e) => {
        e.preventDefault()

        if (password == confirmPass) {
            addUser(email, password, name)
        }
        else {
            setSpanPass(true)
        }
    }

    return (
        <div className="page text-white">
            <div className="container d-flex flex-column align-items-center py-5">
                <section>
                    <h2 className="a-zoom1 a-border1 text-light text-shadow-dark">Register</h2>
                    <h3 className="a-zoom1 a-border1 text-shadow-dark">Join us :D</h3>
                </section>
                <section>
                    <form className="d-flex flex-column align-items-center gap-2 my-4 formLogin" action="" onSubmit={e => handleRegister(e)}>
                        <input required className='form-control a-zoom1 a-border1' type="email" placeholder='your@email.com' onChange={e => {
                            setEmail(e.target.value)
                            setSpanEmail(false)
                        }
                        } />
                        <input required className='form-control a-zoom1 a-border1' type="text" placeholder="name" onChange={e => setName(e.target.value)} />
                        <input required className='form-control a-zoom1 a-border1' type="password" placeholder='password' onChange={e => {
                            setPassword(e.target.value)
                            setSpanPass(false)
                        }} />
                        <input required className='form-control a-zoom1 a-border1' type="password" placeholder='confirm password' onChange={e => {
                            setConfirmPass(e.target.value)
                            setSpanPass(false)
                        }} />
                        {spanPass ? <span className="bg-secondary  col-12 rounded p-1 text-dark">Passwords are differents, please try again</span> : null}
                        {spanEmail ? <span className="bg-secondary  col-12 rounded p-1 text-dark">This email is used, please try again</span> : null}
                        <div className="d-flex flex-column justify-content-start">
                            <div className="d-flex gap-1 a-zoom1 a-border1">
                                <input required className="form-check-input a-zoom1 a-border1" type="checkbox" />
                                <p className="my-auto ">I accept the terms and conditions of <a href="">Player 2</a> </p>
                            </div>
                            <div className="d-flex gap-1 a-zoom1 a-border1">
                                <input className="form-check-input a-zoom1 a-border1" type="checkbox" />
                                <p className="my-auto " >Add me to BusinessName's <a href="">newsletter</a> (Optional) </p>
                            </div>
                        </div>
                        <button className='w-100 btn btn-light text-white text-shadow-dark a-zoom1 a-border1'>Join</button>
                    </form>
                </section>


            </div>
        </div>
    )
}