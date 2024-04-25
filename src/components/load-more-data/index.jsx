import { useState, useEffect } from "react"
import './styles.css'

export default function LoadMoreData({ itemsPerLoad = 20 }) {

    const [loading, setLoading] = useState(false)
    const [products, setProducts] = useState([])
    const [count, setCount] = useState(0)
    const [disableButton, setDisableButton] = useState(false)

    async function fetchProducts() {
        try {
            setLoading(true)
            const response = await fetch(`https://dummyjson.com/products?limit=${itemsPerLoad}&skip=${count === 0 ? 0 : count * itemsPerLoad}`)
            const result = await response.json()
            console.log(result)
            if (result && result.products && result.products.length) {
                setLoading(false)
                setProducts(() => [...products, ...result.products])
            }
        }
        catch (error) {
            console.log(error)
            setLoading(false)
        }
    }



    useEffect(() => {
        fetchProducts();
    }, [count])

    useEffect(() => {
        if (products && products.length >= 100) setDisableButton(true)
    }, [products])

    // if (loading) return (
    //     <>
    //         <div className="container">
    //             <div>Loading data...</div>
    //             <div>Please wait...</div>
    //         </div>
    //     </>
    // )

    return (
        <>
            <div className="load-more-container">
                <div className="product-container">
                    {
                        products && products.length
                            ? products.map((item) => (
                                <div className='product' key={item.id}>
                                    <img src={item.thumbnail} alt={item.title} />
                                    <p>{item.title}</p>
                                </div>

                            ))
                            : null
                    }
                </div>
                <div className="button-container">
                    <button disabled={disableButton} onClick={() => setCount(count + 1)}>Load More Products</button>
                </div>
                {
                    disableButton
                        ? <p className="message">No more products to load</p>
                        : null
                }
            </div>
        </>
    )
}