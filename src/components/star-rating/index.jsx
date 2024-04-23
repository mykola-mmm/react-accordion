import { FaStar } from 'react-icons/fa';
import { useState } from 'react';
import './styles.css'

export default function StarRating({ numberOfStars = 10 }) {

    const [rating, setRating] = useState(0)
    const [hover, setHover] = useState(0)

    function handleClick(getCurrentIndex) {
        setRating(getCurrentIndex)
        console.log(rating)
    }

    function handleMouseEnter(getCurrentIndex) {
        setHover(getCurrentIndex)
        console.log(getCurrentIndex)
    }

    function handleMouseLeave() {
        setHover(rating)
        // console.log(getCurrentIndex)
    }

    return (
        <div>
            {
                [...Array(numberOfStars)].map((_, index) => {
                    index += 1
                    return <FaStar
                        key={index}
                        className={index <= (hover || rating) ? 'active' : 'inactive'}
                        onClick={() => handleClick(index)}
                        onMouseEnter={() => handleMouseEnter(index)}
                        onMouseLeave={() => handleMouseLeave()}
                        size={67}
                    />
                })
            }
        </div>
    )
}