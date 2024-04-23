import { useState, useEffect } from "react"

export default function RandomColor() {

    const [typeOfColor, setTypeOfColor] = useState("hex")
    const [color, setColor] = useState("#000000")

    function setColorType(type) {
        setTypeOfColor(type)
        console.log("set color type to " + type)
    }

    function generateRandomColor() {
        if (typeOfColor === "hex") {
            generateRandomColorHEX()
        } else {
            generateRandomColorRGB()
        }
    }

    function generateRandomColorHEX() {
        console.log("Generate Random Color")
        let tmpColor = "#"
        for (let i = 0; i < 3; i++) {
            let randomColor = Math.floor(Math.random() * 256)
            console.log(randomColor)
            tmpColor = tmpColor + randomColor.toString(16)
        }
        console.log(tmpColor)
        setColor(tmpColor)
    }

    function generateRandomColorRGB() {
        console.log("Generate Random Color")
        let tmpColor = "rgb("
        for (let i = 0; i < 3; i++) {
            let randomColor = Math.floor(Math.random() * 256)
            console.log(randomColor)
            tmpColor = tmpColor + randomColor
            if (i !== 2) {
                tmpColor = tmpColor + ","
            }
        }
        tmpColor = tmpColor + ")"
        console.log(tmpColor)
        setColor(tmpColor)
    }

    useEffect(() => {
        generateRandomColor()
    }, [typeOfColor])

    return (
        <>
            <div
                style={{
                    width: "100vw",
                    height: "100vh",
                    background: color,
                    textAlign: "center",
                }}>
                <button onClick={() => setColorType('rgb')}>Generate RGB Color</button>
                <button onClick={() => setColorType('hex')}>Generate Hex Color</button>
                <button onClick={generateRandomColor}>Generate Random Color</button>
                <div
                    className="color-info"
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        color: '0#ffffff',
                        fontSize: '60px',
                        marginTop: '50px',
                        flexDirection: 'column',
                        gap: '10px'
                    }}>
                    <h2>{typeOfColor === 'rgb' ? "RGB Color" : "HEX Color"}</h2>
                    <h1>{color}</h1>
                </div>
            </div>
        </>

    )
}