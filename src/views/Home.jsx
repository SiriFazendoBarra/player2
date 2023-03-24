import { useDataContext } from "../context/DataContext"
import { useParams } from "react-router-dom"

import { useState } from 'react'
import Cards from "../components/Cards"
import Filter from "../components/Filter"
import { useLoginContext } from "../context/LoginContext"
import { useSearchContext } from "../context/SearchContext"

export default function Home() {
    const { searchBar, categories, handleFilter } = useSearchContext()
    const { market } = useDataContext()
    const { user } = useLoginContext()
    const params = useParams()
    const [filterIndex, setFilterIndex] = useState(0)

    handleFilter(filterIndex)

    return (
        <div className="page">
            <div className="d-flex flex-wrap container py-5 gap-4">
                <section className="col-12">
                    <h1 className="text-center text-white text-shadow-dark-soft a-zoom1">Welcome to Player 2 <span className=" a-border1 text-shadow-dark text-light">{user.name}</span> !</h1>
                </section>
                <section className="col-12 my-3 d-flex justify-content-end">
                    <Filter filterIndex={filterIndex} setFilterIndex={setFilterIndex} />
                </section>

                <section className="marketSection col-12">
                    {
                        !market.length > 0 ? null
                            :
                            market.filter((item) => item.title.toLowerCase().includes(searchBar.toLowerCase())).filter((item) => item.category.includes(categories))
                                .map((item) => {
                                    return (
                                        <Cards key={item.id} item={item} params={params} />
                                    )
                                })
                    }
                </section>
            </div >
        </div >
    )
}