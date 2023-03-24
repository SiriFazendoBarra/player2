import { useDataContext } from "../context/DataContext"
import { useNavigate, useParams } from "react-router-dom"
import { useCartContext } from "../context/CartContext"
import { FaRegHeart, FaHeart } from "react-icons/fa"
import { useFavoritesContext } from "../context/FavoritesContext"
import { useLoginContext } from "../context/LoginContext"

export default function Item() {

    const { cart, handleCart, addToCart } = useCartContext()
    const { market } = useDataContext()
    const { favorites, handleFavorites } = useFavoritesContext()
    const { user } = useLoginContext()
    const params = useParams()
    const index = market.findIndex((i) => i.id == params.id)
    const item = market[index]

    return (
        <div className="page text-white">
            <div className="container py-5 d-flex flex-column">
                <section className="d-flex justify-content-between mb-5">
                    <h2 className="text-light text-shadow-dark a-zoom1 a-border1">Check this one!</h2>
                </section>

                <div className="d-flex flex-wrap bg-light text-shadow-dark rounded justify-content-between">
                    <div className="p-2 rounded col-12 col-md-4">
                        <img className="img-fluid img-item rounded" src={item.img} alt="" />
                    </div>
                    <div className="col-12 col-md-7 d-flex flex-column justify-content-between p-2">

                        <div>
                            <p className="h3 mb-4">{item.title}</p>
                            <p className="text-align-justify ">{item.desc}</p>
                        </div>

                        <div className="d-flex justify-content-between align-items-center gap-3 text-center">
                            {user.logged ?

                                <FaHeart className={`h3 m-0 z-2 fs-1  ${!favorites.some((ele) => ele == item.id) ? "a-zoom2 " : "text-white active2 a-zoom1"} likeButton `} role="button" onClick={() => handleFavorites(item.id)} />

                                : null
                            }

                            <p className="h3 m-0 a-zoom1">Price: ${item.price}</p>
                            {
                                user.logged ? <button className={!cart.some(ele => ele.id == item.id) ? "btn btn-secondary text-white text-shadow-dark a-zoom1" : "btn btn-dark"} disabled={!cart.some(ele => ele.id == item.id) ? false : true} onClick={() => addToCart(item.id)}>Add to Cart</button>
                                    : null
                            }
                        </div>
                    </div>
                </div>


            </div>
        </div>
    )
}