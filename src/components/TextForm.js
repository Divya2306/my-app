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
        <h2>{props.title}</h2>
            <div className="mb-3">
                <textarea className="form-control"  style={{backgroundColor:props.mode==='light'?'white':'black',color:props.mode==='light'?'black':'white'}} value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-secondary mx-2 my-1" onClick={handleUpClick}>Convert to UpperCase</button>
            <button className="btn btn-secondary mx-2 my-1" onClick={handleLowClick}>Convert to LowerCase</button>
            <button className="btn btn-secondary mx-2  my-1" onClick={handleClearClick}>Clear</button>
    </div>
    <div className="container my-3" style={{color:props.mode==='light'?'black':'white'}}>
      <h4>Your text summary</h4>
      <p>{text.split(' ').filter((element)=>{return element.length!==0}).length} words and {text.length} characters.</p>
      <p>{0.008*text.split(' ').filter((element)=>{return element.length!==0}).length} minutes for read.</p>
      <h5>Preview</h5>
      <p>{text.length>0?text:"Enter something in above textbox to preview here"}</p>
    </div>
    </>
  )
}
