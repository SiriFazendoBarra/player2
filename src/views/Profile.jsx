import { useState } from "react"
import { useLoginContext } from "../context/LoginContext"

export default function UserProfile() {

    const { user, editUser, edit, setEdit } = useLoginContext()
    const [userInfo, setUserInfo] = useState(user)

    const handleEditProfile = (e) => {
        e.preventDefault()
        if (edit) {
            editUser(userInfo)
        }
        edit ? setEdit(false) : setEdit(true)
    }

    return (
        <div className="page text-white text-shadow-dark">
            <div className="container d-flex flex-column align-items-center py-5">
                <h2 className="a-zoom1 a-border1 text-light">Hey {user.name}</h2>
                <h3 className="a-zoom1 a-border1">What will we see today?</h3>
                <form className="d-flex flex-wrap login-form justify-content-end" action="" onSubmit={(e) => handleEditProfile(e)}>
                    <div className="col-12 col-md-6 p-2 a-zoom1 a-border1">
                        <p>Email</p>
                        <input readOnly={!edit ? true : false} className='form-control' type="email" placeholder='your@email.com' defaultValue={user.email} onChange={(e) => setUserInfo(prevState => ({ ...prevState, email: e.target.value }))} />
                    </div>
                    <div className="col-12 col-md-6 p-2 a-zoom1 a-border1">
                        <p>Name</p>
                        <input readOnly={!edit ? true : false} className='form-control' type="text" placeholder='name' defaultValue={user.name} onChange={(e) => setUserInfo(prevState => ({ ...prevState, name: e.target.value }))} />
                    </div>
                    <div className="col-12 col-md-6 p-2 a-zoom1 a-border1">
                        <p>Lastname</p>
                        <input readOnly={!edit ? true : false} className='form-control' type="text" placeholder='lastname' defaultValue={user.lastname} onChange={(e) => setUserInfo(prevState => ({ ...prevState, lastname: e.target.value }))} />
                    </div>
                    <div className="col-12 col-md-6 p-2 a-zoom1 a-border1">
                        <p>Birthday</p>
                        <input readOnly={!edit ? true : false} className='form-control' type="date" placeholder='birthday' defaultValue={user.birthdate} onChange={(e) => setUserInfo(prevState => ({ ...prevState, birthdate: e.target.value }))} />
                    </div>
                    <div className="col-12 col-md-12 p-2 a-zoom1 a-border1">
                        <p>Address</p>
                        <input readOnly={!edit ? true : false} className='form-control' type="text" placeholder='address' defaultValue={user.address} onChange={(e) => setUserInfo(prevState => ({ ...prevState, address: e.target.value }))} />
                    </div>
                    <div className="col-12 col-md-6 p-2 d-flex justify-content-between gap-2 flex-wrap align-items-center">
                        <p className="m-0 col-4 text-center a-zoom1 a-border1">{!edit ? "Modify your account" : "Save changes"}</p>
                        <button className={`btn text-white text-shadow-dark a-zoom1 a-border1 btn-${!edit ? "secondary" : "light"} col-6`} type="submit">{!edit ? "Edit info" : "Save"}</button>
                    </div>
                </form>
            </div>
        </div>
    )
}