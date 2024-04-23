import { useEffect, useState } from "react"
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs"
import "./styles.css"

export default function ImageSlider({ url, limit = 5, page = 1 }) {

    const [images, setImages] = useState([])
    const [currentSlide, setCurrentSlide] = useState(0)
    const [errorMsg, setErrorMsg] = useState(null)
    const [loadingState, setLoadingState] = useState(false)

    async function fetchImages(getUrl) {
        try {
            setLoadingState(true)
            const responce = await fetch(`${getUrl}?page=${page}&limit=${limit}`)
            const data = await responce.json()

            if (data) {
                setImages(data)
                setLoadingState(false)
            }
        } catch (e) {
            console.log('error occured', e.message)
            setErrorMsg(e.message)
            setLoadingState(false)
        }
    }

    function handlePrevious() {
        setCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1)
    }

    function handleNext() {
        setCurrentSlide(currentSlide === images.length - 1 ? 0 : currentSlide + 1)
    }

    useEffect(() => {
        if (url !== null) {
            fetchImages(url)
        }
    }, [url])

    console.log(images)

    if (loadingState) {
        return (
            <div>
                LoAdInG ...
            </div>
        )
    }

    if (errorMsg !== null) {
        return (
            <div>
                ErOr OcCuReD - {errorMsg}
            </div>
        )
    }

    return (
        <>
            <div className="container">
                <BsArrowLeftCircleFill onClick={handlePrevious} className="arrow arrow-left" />
                {
                    images && images.length
                        ? images.map((imageItem, index) => (
                            <img
                                key={imageItem.id}
                                src={imageItem.download_url}
                                alt={imageItem.download_url}
                                className={ currentSlide === index ? "current-image" : "current-image hide-current-image"}
                            />
                        ))
                        : null
                }
                <BsArrowRightCircleFill onClick={handleNext} className="arrow arrow-right" />
                <span className="circle-indicators">
                    {
                        images && images.length
                            ? images.map((_, index) => (
                                <button
                                    key={index}
                                    className={ currentSlide === index ? "current-indicator" : "current-indicator inactive-indicator"}
                                    onClick={() => setCurrentSlide(index)}
                                >
                                </button>
                            ))
                            : null
                    }
                </span>
            </div>
        </>
    )
}