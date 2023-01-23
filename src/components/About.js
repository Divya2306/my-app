
import React,{useState} from 'react'

export default function About() {
    const [myStyle,setmyStyle]=useState({
        color:'Black',
        backgroundColor:'White'
    })

    const [btnText,setbtnText]=useState('Enable Dark Mode');

    const toggleBtn=()=>{
        if(myStyle.color==='White'){
            setmyStyle({
                color:'Black',
                backgroundColor:'White'
            })
            setbtnText('Enable Dark Mode');
        }
        else{
            setmyStyle({
                color:'White',
                backgroundColor:'Black'
            })
            setbtnText('Enable Light Mode');
        }
    }
  return (
    <div className='container' style={myStyle}>
        <h1>About Us</h1>
        <div class="accordion" id="accordionExample">
        <div class="accordion-item" style={myStyle}>
            <h2 class="accordion-header" id="headingOne" style={myStyle}>
            <button class="accordion-button" type="button"  style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                Accordion Item #1
            </button>
            </h2>
            <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
            <div class="accordion-body">
                <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
            </div>
            </div>
        </div>
        <div class="accordion-item" style={myStyle}>
            <h2 class="accordion-header" id="headingTwo" style={myStyle}>
            <button class="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                Accordion Item #2
            </button>
            </h2>
            <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
            <div class="accordion-body">
                <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
            </div>
            </div>
        </div>
        <div class="accordion-item" style={myStyle}>
            <h2 class="accordion-header" id="headingThree" style={myStyle}>
            <button class="accordion-button collapsed" type="button"  style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                Accordion Item #3
            </button>
            </h2>
            <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
            <div class="accordion-body">
                <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
            </div>
            </div>
        </div>
        </div>
        <div className="container my-3">
        <button className='btn btn-dark' onClick={toggleBtn}>{btnText}</button>
        </div>
    </div>
  )
}
