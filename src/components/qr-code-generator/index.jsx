import QRCode from 'react-qr-code';
import { useState, useEffect } from 'react';
import './styles.css'


export default function QrCodeGenerator() {

    const [qrValue, setQrValue] = useState('')
    const [inputValue, setInputValue] = useState('')

    function handleQrCodeGenerate() {
        setQrValue(inputValue)
        setInputValue('')
    }

    return (
        <>
            <div className="qrcodegenerator-container">
                <h1>QR code generator</h1>
                <div>
                    <input onChange={(e) => setInputValue(e.target.value)} value={inputValue} type="text" name="qr-code" placeholder='Enter your value' />
                    <button
                        disabled={inputValue && inputValue.trim() !== '' ? false : true}
                        onClick={handleQrCodeGenerate}>
                        Generate
                    </button>
                </div>
                <div>
                    <QRCode id="qr-code-value" value={qrValue} />
                </div>
            </div>
        </>
    )
}