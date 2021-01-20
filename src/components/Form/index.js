import React from 'react'
import "./style.css"
// import axios from 'axios'
import emailjs from 'emailjs-com'
// const API_PATH = 'http://localhost:3000/AndresLong01.github.io/api/contact/index.php'

class Form extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      fname: '',
      lname: '',
      email: '',
      message: '',
      mailSent: false,
      error: null
    }
  }

  handleFormSubmit(e) {
    e.preventDefault();

    const {fname, lname, email, message } = this.state;

    let templateParams = {
      first: fname,
      last: lname,
      from_name: email,
      to_name: 'Andres Long',
      reply_to: email,
      message: message
    }

    emailjs.send(
      'service_mybstaz',
      'template_crs68dp',
      templateParams,
      'user_zixXyWh8Xt07HHQSKKbYB'
    )

    this.resetForm();
    // axios({
    //   method: "POST",
    //   url: `${API_PATH}`,
    //   headers: { 'content-type': 'application/json' },
    //   data: this.state
    // }).then(res => {
    //   this.setState({
    //     mailSent: res.data.sent
    //   })
    // }).catch(err => this.setState({ err: err.message }));
  }

  resetForm() {
    this.setState({
      fname: '',
      lname: '',
      email: '',
      message: ''
    })
  }

  render(){
    return (
      <div className="formCont">
        <p>Contact Me</p>
        <div>
          <form action="#">
            <label>First Name</label>
            <input type="text" id="fname" name="firstname" placeholder="Your name..."
              value={this.state.fname}
              onChange={e => this.setState({ fname: e.target.value })}/>
            <label>Last Name</label>
            <input type="text" id="lname" name="lastname" placeholder="Your Last Name..."
              value={this.state.lname}
              onChange={e => this.setState({ lname: e.target.value })}/>

            
            <label>Email</label>
            <input type="email" id="email" name="email" placeholder="Your Email..."
              value={this.state.email}
              onChange={e => this.setState({ email: e.target.value })}/>


            <label>Subject</label>
            <textarea id="subject" name="subject" placeholder="Write Something..."
              onChange={e => this.setState({ message: e.target.value })}
              value={this.state.message}
            ></textarea>
            <input type="submit" onClick={e => this.handleFormSubmit(e)} value="Submit"/>

            <div>
              {this.state.mailSent &&
                <div> Thank you for contacting me. </div>
              }
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default Form
