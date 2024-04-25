import MenuList from "./menu-list"
import { useState } from "react"
import { FaMinus, FaPlus} from "react-icons/fa"
import "./styles.css"

export default function MenuItem({ item }) {

    const [isOpen, setIsOpen] = useState({})

    function handleIsOpen(getCurrentLabel) {
        setIsOpen({...isOpen, [getCurrentLabel]: !isOpen[getCurrentLabel]})
        console.log(isOpen)
    }

    console.log(isOpen)

    return (
        <>
            <li>
                <div className="menu-item-container">
                    <p>
                        {item.label}
                    </p>
                    {
                        item && item.children && item.children.length > 0 
                            ? <span onClick={() => handleIsOpen(item.label)}>
                                {
                                    isOpen[item.label]
                                    ? <FaMinus />
                                    : <FaPlus />
                                }
                            </span>
                            : null
                    }
                </div>
                {
                    item && item.children && item.children.length > 0 && isOpen[item.label]
                        ? <MenuList list={item.children} />
                        : null
                }
            </li>
        </>
    )
}