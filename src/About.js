// import React, { useState } from 'react'

export default function About(props) {


    const myStyle1 = {
      color: props.mode === 'light' ? 'black' : 'white',
    backgroundColor: props.mode === 'light' ? 'white' : '#032f2f',
    // border: props.mode === 'light' ? '1px solid blue' : '1px solid red'
      }

    // const [btnText, setbtnText] = useState("Enable Dark Mode")

    // const btnChange = () => {
    //     if (props.mode === 'light') {
    //         setmyStyle1({
    //             color: 'Black',
    //             backgroundColor: 'white',
    //             border: '1px solid Blue'
    //             })
    //         setbtnText("Enable Dark Mode")
    //     }else 
    //     {
    //         setmyStyle1({
    //             color: 'white',
    //             backgroundColor: '#032f2f',
    //             border: '1px solid Red'
    //             })
    //             setbtnText("Enable Light Mode")
    //     }
    // }

  return (
        <div className="container" style={myStyle1}>
        <div className="accordion" id="accordionExample" >
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button" style={myStyle1} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        <strong>Analyze your text</strong>
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle1}>
        TextUtils gives you a way to analyze your text quickly and efficiently. Be it word count, character count or anything else you want.
        </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" style={myStyle1} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        <strong>Free to use</strong>
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle1}>
      TextUtils is a free character counter tool that provides instant character count & word count statistics for a given text. TextUtils reports the number of words and characters. Thus it is suitable for writing text with word/ character limit. 
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" style={myStyle1} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        <strong>Browser Compatible</strong>
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle1}>
      This word counter software works in any web browsers such as Chrome, Firefox, Internet Explorer, Safari, Opera. It suits to count characters in facebook, blog, books, excel document, pdf document, essays, etc.      </div>
    </div>
  </div>
</div>
{/* <button className='btn btn-primary my-3' style={myStyle1} onClick={btnChange}>{btnText}</button> */}
</div>
  )
}
