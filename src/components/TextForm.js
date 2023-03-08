import React, { useState } from 'react'

export default function TextForm(props) {
    const [text, setText] = useState("Enter text here");

    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("upper case is used", "success ");
    }

    const handleLowClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("lower case is used", "success ");

    }
    const handleClearClick = () => {
        let newText = "";
        setText(newText);
        props.showAlert("clear is used", "success ");
    }

    const handleCopy = () => {
        // directly use navigator it will do the work
        navigator.clipboard.writeText(text);

        props.showAlert("copy is used", "success ");
    }

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("extra spaces are removed", "success ");
    }

    const handleSentence = () => {
        const lower = text.toLowerCase();
        setText(lower.charAt(0).toUpperCase() + lower.slice(1));
        props.showAlert("Sentence case is used", "success ");

    }

    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    return (
        <>
            <div className='container' style={{ color: props.mode === "light" ? "black" : "white" }}>
                <h2 className="mb-5">{props.heading}</h2>

                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8" style={{ background: props.mode === "light" ? "white" : "#042743", color: props.mode === "light" ? "black" : "white", border: props.mode === "light" ? "1px solid black" : "" }}></textarea>
                </div>

                <button disabled={text.length === 0} className="btn btn-success mx-2 my-3" onClick={handleUpClick}>Upper case</button>

                <button disabled={text.length === 0} className="btn btn-success mx-1 my-3" onClick={handleLowClick}>lower case</button>

                <button disabled={text.length === 0} className="btn btn-success mx-1 my-3" onClick={handleCopy}>Copy text</button>

                <button disabled={text.length === 0} className="btn btn-success mx-1 my-3" onClick={handleSentence}>Sentence case</button>

                <button disabled={text.length === 0} className="btn btn-success mx-1 my-3" onClick={handleExtraSpaces}>Remove Extra spaces</button>

                <button disabled={text.length === 0} className="btn btn-danger mx-2 my-3" onClick={handleClearClick}>Reset</button>

            </div>

            <div className="container my-5" style={{ color: props.mode === "light" ? "black" : "white" }}>
                <h2 className='mb-3' style={{ fontSize: "33px" }}>Your text summary</h2>

                <p style={{ fontSize: "18px" }}><b>{text.split(/\s+/).filter((element) => { return element.length !== 0 }).length}</b> words <b>{text.length}</b> characters</p>

                <p style={{ fontSize: "18px" }}><b>{0.008 * text.split(/\s+/).filter((element) => { return element.length !== 0 }).length}</b> minutes taken to read </p>

                <div className="container mt-5">
                    <h2 className='my-4' style={{ fontSize: "33px" }}>Text preview</h2>
                    <div className="container">
                        <p style={{ fontSize: "18px" }}><b>{text.length > 0 ? text : "Nothing to preview"}</b></p>
                    </div>
                </div>
            </div>

        </>
    )
}
