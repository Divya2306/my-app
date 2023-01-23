import React,{useState} from 'react'

export default function TextForm(props) {
  const handleUpClick=()=>{
    // console.log('Uppercase button clicked');
    let newText=text.toUpperCase();
    setText(newText);
    props.showAlert("Converted into uppercase","success");
  }
  const handleLowClick=()=>{
    // console.log('Lowercase button clicked');
    let newText=text.toLowerCase();
    setText(newText);
    props.showAlert("Converted into lowercase","success");
  }
  const handleClearClick=()=>{
    let newText="";
    setText(newText);
    props.showAlert("Text has been cleared","success");
  }
  const handleOnChange=(event)=>{
    // console.log('On change');
    setText(event.target.value);
  }

  const [text,setText]=useState("");
  
  return (
    <>
    <div className='container' style={{color:props.mode==='light'?'black':'white'}}>
        <h1>{props.title}</h1>
            <div className="mb-3">
                <textarea className="form-control"  style={{backgroundColor:props.mode==='light'?'white':'black',color:props.mode==='light'?'black':'white'}} value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-secondary mx-2" onClick={handleUpClick}>Convert to UpperCase</button>
            <button className="btn btn-secondary mx-2" onClick={handleLowClick}>Convert to LowerCase</button>
            <button className="btn btn-secondary" onClick={handleClearClick}>Clear</button>
    </div>
    <div className="container my-5" style={{color:props.mode==='light'?'black':'white'}}>
      <h3>Your text summary</h3>
      <p>{text.split(' ').length} words and {text.length} characters.</p>
      <p>{0.008*text.split(' ').length} minutes for read.</p>
      <h4>Preview</h4>
      <p>{text.length>0?text:"Enter something in above textbox to preview here"}</p>
    </div>
    </>
  )
}
