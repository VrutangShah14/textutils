import React, {useState} from 'react'

export default function TextForm(props) {
    const [text, setText] = useState("");
    const handleUpClick = () => {
        let newText = text.toUpperCase()
        setText(newText)
        props.showAlert("Converted to UpperCase", "success")
    }

    const handleLowClick = () => {
        let newText = text.toLowerCase()
        setText(newText)
        props.showAlert("Converted to LowerCase", "success")

    }

    const handleClearClick = () => {
        let newText = ""
        setText(newText)
        props.showAlert("Text is cleared", "danger")
    }

    const handleOnChange = (event) => {
        setText(event.target.value)
    }

    const wordCount = (text) => {
        let count = 0;
        let split = text.split(' ');
        for (let i = 0; i < split.length; i++) {
            if (split[i] !== "") {
                count += 1;
            }
        }
        return count
    }

    const textCopy = () => {
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text is copied", "success")

    }
    
    const handleExtraSpace = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Extra Spaces are removed", "warning")

    }

    return (
        <>
        <div className="container" style={{color: props.mode === 'dark' ? 'white' : 'black'}}>
            <h1>
                {props.heading}
            </h1>
            <div className="mb-3">
                {/* <label htmlFor="myBox" className="form-label">Textbox</label> */}
                <textarea className="form-control shadow-sm p-3 rounded" style={{backgroundColor: props.mode === 'light' ? 'white' : 'grey', color: props.mode === 'dark' ? 'white' : 'black' }} value = {text} onChange = {handleOnChange} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-2 my-1" onClick = {handleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-2 my-1" onClick = {handleLowClick}>Convert to Lowercase</button>
            <button className="btn btn-danger mx-2 my-1" onClick = {handleClearClick}>Clear Text</button>
            <button className="btn btn-success mx-2 my-1" onClick = {textCopy}>Copy Text</button>
            <button className="btn btn-warning mx-2 my-1" onClick = {handleExtraSpace}>Remove Extra Space</button>
        </div>
        <div className={`container my-3 text-${props.mode === 'light' ? 'Dark' : 'light'}`}>
            <h2>Your text summary</h2>
            <p>{wordCount(text)} words and {text.length} characters</p>
            <p>{Math.round(0.008 * wordCount(text) * 1000) / 1000} minutes read</p>
            <h2>Preview</h2>
            <p>{text.length > 0 ? text : "Enter something to preview it here"}</p>
        </div>
        </>
    )
}
