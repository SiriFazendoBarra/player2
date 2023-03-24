import { useDataContext } from "../context/DataContext"
import Card from "react-bootstrap/Card"
import { useNavigate } from "react-router-dom"
import { useLoginContext } from "../context/LoginContext"

export default function Publications() {

    const { user } = useLoginContext()
    const { publications, setPublications } = useDataContext()
    const navigate = useNavigate()

    const handleDeleteButton = (id) => {

        if (user.logged) {
            setPublications(publications.filter(item => item.id != id))
        }
    }

    return (
        <div className="page text-white">
            <div className="container py-5 d-flex flex-column">
                <section className="d-flex flex-wrap gap-3 justify-content-between mb-5">
                    <div className="text-shadow-dark">
                        <h2 className="text-light a-zoom1 a-border1 ">Your Publications</h2>
                        {publications.length > 0 ? <h3 className="a-zoom1 a-border1">Gotta catch for moar!</h3> : <h3 className="a-zoom1 a-border1">Ups! it seems very very empty right here</h3>}
                    </div>
                    <button className="btn btn-light my-auto a-zoom1 a-border1 col-12 col-md-4" onClick={() => navigate("/publications/addnew")}   >Add new</button>

                </section>
                <section className="marketSection">
                    {
                        !publications.length > 0 ? null :
                            publications.filter(ele => ele.owner == user.id)
                                .map((item) => {
                                    return (
                                        <Card key={item.id} className='m-auto w-100 a-zoom1 a-border1 bg-light text-dark' role="button">
                                            <Card.Img className='CardImg cursor-pointer' variant="top" onClick={() => navigate(`../market/${item.id}`)} src={item.img} />
                                            <Card.Body className='d-flex flex-column justify-content-between p-2'>
                                                <Card.Title className=' h6'>{item.title}</Card.Title>
                                                <div className='d-flex justify-content-between align-items-center'>
                                                    <h4 className='m-0 text-white text-shadow-dark'>${item.price}</h4>
                                                    <button className="btn btn-delete" onClick={() => handleDeleteButton(item.id)}>Delete</button>
                                                </div>
                                            </Card.Body>
                                        </Card >

                                    )
                                })
                    }
                </section>
            </div>

        </div>
    )
}