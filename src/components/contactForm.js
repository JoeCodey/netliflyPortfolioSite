import React, {Component} from 'react';
import {useState} from 'react' ;


// const initialState = { 
//     name: "", email: "", message: ""} ;

const encode = (data) => {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
    }

// const ContactForm = (props) => {


//     const [contactstate, setState] = useState(initialState)
    
//     const handleSubmit = (e) => {
//         fetch("/", {
//           method: "POST",
//           headers: { "Content-Type": "application/x-www-form-urlencoded" },
//           body: encode({ "form-name": "contact", ... contactstate })
//         })
//           .then( setState(<p> form sent!</p>))
//           .catch(error => alert(error));
  
       
//       };
    

//       const handleChange  = (e) => setState({ [e.target.name]: e.target.value });

//     return (
//         <form onSubmit={handleSubmit()} className= "w3-container">
//           <p>
//             <label>
//               Your Name: <input className="w3-input" type="text" name="name" value={contactstate.name} onChange={setState({name: value})} />
//             </label>
//           </p>
//           <p>
//             <label>
//               Your Email: <input className="w3-input" type="email" name="email" value={contactstate.email} onChange={setState({email: value})} />
//             </label>
//           </p>
//           <p>
//             <label>
//               Message: <textarea className="w3-input" name="message" value={contactstate.message} onChange={setState({message: value})} />
//             </label>
//           </p>
//           <p>
//             <button className="w3-button" type="submit">Send</button>
//           </p>
//         </form>
//     )


// }



class ContactForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = { 
        formsubmission:{ name: "", organization: "", email: "", message: ""},
        showDropdownFlag: " "
    };
      
    }

    /* Here’s the juicy bit for posting the form submission */

    handleSubmit = e => {
      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({ "form-name": "contact", ...this.state.formsubmission })
      })
        .then(() => alert("Success!"))
        .catch(error => alert(error));

      e.preventDefault();
    };

    handleChange = e => {
      e.preventDefault() ; 
      this.setState( {formsubmission: { ...this.state.formsubmission, [e.target.name]: e.target.value}})
      // console.log(`${e.target.name}: ${e.target.value}`)
      // console.log(this.state.formsubmission)
    }

    handleDropdown = (flag) => {
       flag = (flag === ' ' ? ' w3-show' : ' ' ) 
      this.setState({showDropdownFlag: flag} );
    };

    render() {
      const { name, email, message, organization } = this.state;
      return (
        <div className={"w3-conatiner mb-5"} >
            <div className={'w3-click w3-dropdown-click '}>
                <button onClick={() =>{this.handleDropdown(this.state.showDropdownFlag)}} className={"w3-button","w3-blue"}>Contact Me! </button>
                <div className={"w3-dropdown-content " + this.state.showDropdownFlag}  >
                    <form onSubmit={this.handleSubmit} className={"w3-container","w3-row-padding"} style={{width:'300%'}} data-netlify="true" data-netlify-honeypot="bot-field" >
                        <div class="w3-half">
                            <p>
                                <label>
                                Your Name: <input className="w3-input" type="text" name="name" value={name} onChange={this.handleChange} />
                                </label>
                            </p>
                                <label>
                                    Your Organization: <input className="w3-input" type="text" name="organization" value={organization} onChange={this.handleChange} />
                                </label>
                        </div>
                        <div class="w3-half ">
                        
                            <p>
                                <label>
                                Your Email: <input className="w3-input" type="email" name="email" placeholder="*Optional*" value={email} onChange={this.handleChange} />
                                </label>
                            </p>
                            <p>
                                <label> Message:  </label></p>
                                <textarea name="message" value={message} onChange={this.handleChange} />
                        
                        <div data-netlify-recaptcha="true"></div>       
                        <p>
                            <button className={"w3-button","w3-blue"} type="submit">Send</button>
                        </p>
                        </div>
                    </form>
                    
                </div>
            </div>
        </div>
      );
    }
  }

  export default ContactForm ; 
