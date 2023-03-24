import { useState } from "react"
import { useLoginContext } from "../context/LoginContext"
import { useDataContext } from "../context/DataContext"
import { useNavigate } from "react-router-dom"

export default function AddNew() {

    const { user } = useLoginContext()
    const { publications, setPublications } = useDataContext()
    const navigate = useNavigate()
    const [title, setTitle] = useState("")
    const [price, setPrice] = useState("")
    const [description, setDescription] = useState("")
    const [img, setImg] = useState("")

    const handleAddNew = (e) => {
        e.preventDefault()
        setPublications([...publications,
        {
            owner: user.id,
            id: Date.now(),
            title: title,
            price: price,
            desc: description,
            img: img,
            category: "games"
        }

        ])
        navigate("/publications")
    }

    return (
        <div className="page text-white">
            <div className="container d-flex flex-wrap align-items-center gap-5 py-5">
                <section className="col-12">
                    <h2 className="text-light text-shadow-dark a-zoom1 a-border1">Add something new!</h2>
                </section>
                <section className="p-3 bg-light rounded justify-content-between d-flex flex-wrap align-items-center col-12">
                    <div className="col-12 col-md-4">
                        {img ? <img className="img-fluid rounded" src={img} /> : null}
                    </div>

                    <form className="col-12 col-md-7 d-flex gap-2 flex-column" onSubmit={(e) => handleAddNew(e)} action="">

                        <input required className='form-control a-zoom1' type="text" placeholder='title' onChange={(e) => setTitle(e.target.value)} />
                        <input required className='form-control a-zoom1' type="text" placeholder=' price' onChange={(e) => setPrice(e.target.value)} />
                        <textarea required className='form-control a-zoom1' type="text" rows="6" placeholder='description' onChange={(e) => setDescription(e.target.value)} />
                        <div className="col-12 d-flex flex-wrap justify-content-between">
                            <input required className='a-zoom1 col-12 col-md-9 rounded bg-dark ' type="file" placeholder='picture' onChange={(e) => setImg(`/${e.target.files[0].name}`)} />
                            <button className="col-12 col-md-2 btn btn-delete text-white text-shadow-dark">Delete</button>
                        </div>
                        <div className="d-flex flex-column justify-content-start text-shadow-dark terms">
                            <div className="d-flex gap-3 justify-content-between align-items-center">
                                <input required className="form-check-input a-zoom1 a-border1" type="checkbox" />
                                <p className="my-auto ">I accept the terms and conditions of <a href="">Player 2</a> </p>
                            </div>

                        </div>
                        <div className="col-12 text-end">
                            <button className='btn btn-primary text-white text-shadow-dark a-zoom1 a-border1 w-100' type="submit" >Publish it!</button>
                        </div>


                    </form>

                </section>


            </div>
        </div>
    )
}