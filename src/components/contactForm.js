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
      this.state = { name: "", organization: "", email: "", message: ""};
    }

    /* Here’s the juicy bit for posting the form submission */

    handleSubmit = e => {
      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({ "form-name": "contact", ...this.state })
      })
        .then(() => alert("Success!"))
        .catch(error => alert(error));

      e.preventDefault();
    };

    handleChange = e => this.setState({ [e.target.name]: e.target.value });

    render() {
      const { name, email, message, organization } = this.state;
      return (
        <div className={"w3-conatiner"} >
            <div className={'w3-dropdown-hover '}>
                <button className={"w3-button","w3-blue"}>Contact Me!</button>
                <div className={"w3-dropdown-content "} >
                    <form onSubmit={this.handleSubmit} className={"w3-container","w3-row-padding"} style={{width:'300%'}}>
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