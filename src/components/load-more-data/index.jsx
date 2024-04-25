import { useState, useEffect } from "react"
import './styles.css'

export default function LoadMoreData({ itemsPerLoad = 20 }) {

    const [loading, setLoading] = useState(false)
    const [products, setProducts] = useState([])
    const [count, setCount] = useState(0)


    async function fetchProducts() {
        try {
            setLoading(true)
            const response = await fetch(`https://dummyjson.com/products?limit=${itemsPerLoad}&skip=${count === 0 ? 0 : count * itemsPerLoad}`)
            const result = await response.json()
            console.log(result)

            if (result && result.products && result.products.length) {
                setLoading(false)
                setProducts((prevData) => [...prevData, ...result.products])
            }

        } catch (error) {
            console.log(error)
            setLoading(false)
        }
    }



    useEffect(() => {
        fetchProducts();
    }, [count])

    if (loading) return (
        <>
            <div className="container">
                <div>Loading data...</div>
                <div>Please wait...</div>
            </div>
        </>
    )

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
                    <button onClick={() => setCount(count+1)}>Load More Products</button>
                </div>
            </div>
        </>
    )
}