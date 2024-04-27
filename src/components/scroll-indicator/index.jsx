import { useState, useEffect } from "react"
import { FaCommentsDollar } from "react-icons/fa"
import './styles.css'

export default function ScrollIndicator({ url }) {

    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const [errorMsg, setErrorMsg] = useState(null)
    const [scrollPercentage, setScrollPercentage] = useState(0)


    async function fetchData(getUrl) {
        try {
            setLoading(true)
            const response = await fetch(getUrl)
            const data = await response.json()

            if (data && data.products && data.products.length > 0) {
                setData(data.products)
                setLoading(false)
            }
        }
        catch (error) {
            setLoading(false)
            console.log(error)
            setErrorMsg(error)
        }
    }

    function handleScrollPercentage() {
        console.log(
            document.body.scrollTop,
            document.documentElement.scrollTop,
            document.documentElement.scrollHeight,
            document.documentElement.clientHeight)

        const howMuchScrolled = document.body.scrollTop || document.documentElement.scrollTop;

        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

        setScrollPercentage((howMuchScrolled / height) * 100);
    }

    useEffect(() => {
        fetchData(url)
    }, [url])

    useEffect(() => {
        window.addEventListener('scroll', handleScrollPercentage)
        return () => {
            window.removeEventListener('scroll', () => { })
        }
    }, [])

    console.log(data, loading, scrollPercentage)

    if (loading) {
        return <div className="top-container">Loading...</div>
    }

    return (
        <>
            <div>
                <div className="top-container">
                    <h1>Custom scroll indication</h1>
                    <div className="scroll-progress-tracking-container">
                        <div className="current-progress-bar" style={{ width: `${scrollPercentage}%` }}>
                        </div>
                    </div>
                </div>

                <div className="data-container">
                    {
                        data && data.length
                            ? data.map((item, index) => {
                                return (
                                    <div key={index} className="data-item">
                                        {item.title}, index {index + 1}
                                    </div>
                                )
                            })
                            : null
                    }
                </div>
            </div>
        </>
    )
}