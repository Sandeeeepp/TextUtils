import React, { useState } from 'react'
import PropTypes from 'prop-types'


export default function TextForm(props) {

    const handleUpClick = () => {
        let newValue = text.toUpperCase();
        props.alert("Converted to uppercase","success");
        setText(newValue);
    }

    const handleLoClick = () => {
      let newValue = text.toLowerCase();
      props.alert("Converted to lowercase","success");
      setText(newValue);
  }

    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    const handleClearClick = () => {
      let newValue = '';
      props.alert("Text has been cleared","success");
      setText(newValue);
  }

  const handleCapitalize = () => {
    let newText = text
      .toLowerCase()
      .replace(/\b\w/g, (char) => char.toUpperCase());
    setText(newText);
    props.alert("Text has been capitalized","success");
  };

  const handleReverse = () => {
    let newText = text.split("").reverse().join("");
    setText(newText);
    props.alert("Text has been reversed","success");
  };

  const handleRemoveSpaces = () => {
    let newText = text.split(/[ ]+/).join(" ");
    setText(newText.trim());
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    props.alert("Copied to clipboard","success");
  };

  const handleSentenceCase = () => {
    let newText = text
      .toLowerCase()
      .replace(/(^\s*\w|[.!?]\s*\w)/g, (c) => c.toUpperCase());
    setText(newText);
  };

    const [text,setText]= useState("Enter your text here");
  return (
<div className="container" style={{color: props.mode === 'dark' ? 'white' : '#032f2f'}}>
    <h1>{props.heading}</h1>
<div className="mb-3 my-3" >
  <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="10" style={{color: props.mode === 'dark' ? 'white' : 'black',
  backgroundColor: props.mode === 'dark' ? '#0a332c' : 'white'}}></textarea>
  <button className="btn btn-primary my-3" onClick={handleUpClick}>Convert to Uppercase</button>
  <button className="btn btn-primary my-3 mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
  <button className="btn btn-primary my-3 mx-2" onClick={handleCapitalize}>Capitalize</button>
  <button className="btn btn-primary my-3 mx-2" onClick={handleSentenceCase}>Covert to sentence Case</button>
  <button className="btn btn-primary my-3 mx-2" onClick={handleReverse}>Reverse</button>
  <button className="btn btn-primary my-3 mx-2" onClick={handleRemoveSpaces}>Remove spaces</button>
  <button className="btn btn-primary my-3 mx-2" onClick={handleCopy}>Copy</button>
  <button className="btn btn-primary my-3 mx-2" onClick={handleClearClick}>Clear</button>
  <h1 className="my-3">Your text summary</h1>
  <p className='my-2'>  Your text has {text.trim().split(/\s+/).filter((word) => word.length > 0).length} words 
  and {text.length} characters</p>
  <p className='my-2'>
  Estimated Reading Time:{" "}
  {0.008 *
    text.split(/\s+/).filter((element) => element.length !== 0).length}{" "}
  Minutes
</p>
</div>
</div>
  )
}

TextForm.prototypes = {
    heading: PropTypes.string,
    mode: PropTypes.string,
    alert: PropTypes.func
}
TextForm.defaultProps = {
    heading: "Enter the text here",
}