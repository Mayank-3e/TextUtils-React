import React,{useState} from 'react'


export default function TextForm(props) {
    const [text,setText]=useState('Enter text here');
    const handleUpClick=()=>
    {
        setText(text.toUpperCase());
        props.showAlert("Converted to upeprcase!","success");
    }
    const handleOnChange=(event)=>
    {
        setText(event.target.value)
    }
    return (
    <>
        <div className='container' style={{color: props.mode==='dark'?'white':'#042743'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'#042743'}} id="myBox" rows="8"></textarea>
            </div>
            <button className='btn btn-primary' onClick={handleUpClick}>Convert to Uppercase</button>
        </div>
        <div className='container my-3' style={{color: props.mode==='dark'?'white':'#042743'}}>
            <h1>Your text summary</h1>
            <p>{text.split(' ').filter((el)=>{return el.length;}).length} words and {text.length} characters</p>
            <p>{.008*text.split(' ').length} minutes read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Enter your text to preview it here"}</p>
        </div>
    </>
    )
}
