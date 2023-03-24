import { useFavoritesContext } from "../context/FavoritesContext"
import Cards from "../components/Cards"
import { useDataContext } from "../context/DataContext"

export default function Favorites() {

    const { favorites } = useFavoritesContext()
    const { market } = useDataContext()

    return (
        <div className="page">
            <div className="container py-5 d-flex flex-column">
                <section className="text-white text-shadow-dark d-flex flex-wrap justify-content-between mb-5">
                    <h2 className="col-12 text-light a-zoom1 a-border1">Your Favorites</h2>
                    {favorites.length != 0 ? <h3 className="a-zoom1 a-border1">Gotta catch for moar!</h3> : <h3 className="a-zoom1 a-border1">Ups! it seems very very empty right here</h3>}

                </section>
                <section className="marketSection">
                    {
                        favorites.map((item) => {
                            const element = market[market.findIndex(i => i.id == item)]
                            return (
                                <Cards key={element.id} item={element} />
                            )
                        })
                    }
                </section>
            </div>

        </div>
    )
}