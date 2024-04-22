import { useState } from "react"
import data from "./data"
import "./style.css"

export default function Accordion() {

    const [selected, setSelected] = useState(null)
    const [enableMultiSelect, setEnableMultiSelect] = useState(false)
    const [multiple, setMultiple] = useState([])

    function handleSingleSelection(getCurrentId) {
        console.log(getCurrentId)
        setSelected(getCurrentId)
    }

    function handleMultiSelection(getCurrentId) {
        console.log("initial state - " + multiple)
        let cpyMultiple = [...multiple]
        const findIndexOfCurrentId = cpyMultiple.indexOf(getCurrentId)
        if (findIndexOfCurrentId === -1) {
            cpyMultiple.push(getCurrentId)
        } else {
            cpyMultiple.splice(getCurrentId, 1)
        }
        setMultiple(cpyMultiple)
        console.log("final state - " + multiple)
    }

    return (
        <>
            <div className="wrapper">
                <button onClick={() => setEnableMultiSelect(!enableMultiSelect)}>Enable MultiSelection</button>
                <div className="accordion">
                    {
                        data && data.length > 0 ?
                            data.map(dataItem => <div className="item">
                                <div
                                    onClick={
                                        enableMultiSelect
                                            ? () => handleMultiSelection(dataItem.id)
                                            : () => handleSingleSelection(dataItem.id)}
                                    className="title">
                                    <h3>{dataItem.name}</h3>
                                </div>
                                {
                                    enableMultiSelect
                                        ? multiple.indexOf(dataItem.id) !== -1 && <div className="content">{dataItem.text}</div>
                                        : selected === dataItem.id && <div className="content">{dataItem.text}</div>
                                }
                            </div>)
                            : <div>No data found</div>
                    }
                </div>
            </div>
        </>
    )
}