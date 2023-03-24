import { useState } from "react"
import { useLoginContext } from "../context/LoginContext"

export default function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const { getLogin, checkUser, setCheckUser } = useLoginContext()
    const handleLogin = (e) => {
        e.preventDefault()
        getLogin(email, password)

    }
    return (
        <div className="page text-white">
            <div className="container d-flex gap-3 flex-column align-items-center py-5">
                <h2 className="text-light text-shadow-dark a-zoom1 a-border1">Welcome!</h2>
                <h3 className="text-shadow-dark a-zoom1 a-border1">we've waiting for you!</h3>
                <form className="a-zoom1 a-border1 d-flex flex-column align-items-center gap-2 my-4" action="" onSubmit={(e) => handleLogin(e)}>
                    <input required autoFocus className='form-control a-zoom1 a-border1 text-black' type="text" placeholder='your@email.com' onChange={(e) => {
                        setEmail(e.target.value)
                        setCheckUser(false)
                    }} />
                    <input required className='form-control a-zoom1 a-border1 text-black' type="text" placeholder='your password' onChange={(e) => setPassword(e.target.value)} />
                    {checkUser ? <span className="bg-secondary  col-12 rounded p-1 text-dark">Invalid email or password, please try again</span> : null}
                    <button className='btn btn-light text-white text-shadow-dark a-zoom1 a-border1' type="submit" >Login</button>
                </form>
                <div>
                    <p className="m-auto a-zoom1">Forgot your password?, <a className="text-light text-light text-shadow-dark a-border1" href="">click here</a> </p>
                    <p className="m-auto a-zoom1" >Don't have account?, <a className="text-light text-light text-shadow-dark a-border1" href="/register">click here</a> </p>
                </div>

            </div>

        </div>
    )
}