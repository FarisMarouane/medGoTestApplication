import React, { Component } from 'react';

export class Form extends Component {
  constructor () {
    super();

    this.state = {
      name: '',
      email: '',
      message: '',
      redirect: false
    };

    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangeMessage = this.onChangeMessage.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
  }

  /*
  Functions to listen for changes in form's inputs.
   These changes are then stored in the state.
 */

  onChangeName (e) {
    let name = e.target.value;
    this.setState((prevState) => {
      return {
        ...prevState,
        name
      };
    });
  }

  onChangeEmail (e) {
    let email = e.target.value;
    this.setState((prevState) => {
      return {
        ...prevState,
        email
      };
    });
  }

  onChangeMessage (e) {
    let message = e.target.value;
    this.setState((prevState) => {
      return {
        ...prevState,
        message
      };
    });
  }

  submitHandler (e) {
    e.preventDefault();

    let reqBody = {
      name: this.state.name,
      email: this.state.email,
      message: this.state.message
    };

    fetch('/saveContactInfo', {
      method: 'POST',
      body: JSON.stringify(reqBody),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then((res) => {
        if (res.ok) {
          console.log('Success !');
          this.setState({redirect: true});
          // If success, redirects toward a success page rendered from back end
          window.location.href = 'http://localhost:1337/success';
        }
      }).catch(err => {
        console.log(`error: ${err}`);
        // If error, redirects toward a error page rendered from back end
        window.location.href = 'http://localhost:1337/error';
      });
  }

  render () {
    return (
      <div>
        <h1 className='text-center'>Contact the webmaster</h1>
        <p>If you have any question, comment or suggestion, please contact our Webmaster by filling the form below:</p>
        <div style={{width: '45%', margin: '40px auto'}}>
          <form onSubmit={this.submitHandler}>
            <div className='form-group'>
              <label className='pull-left'>Full Name:</label>
              <input className='form-control' type='text' required='true' onChange={this.onChangeName} />
            </div>
            <div className='form-group'>
              <label className='pull-left'>Email:</label>
              <input className='form-control' type='email' required='true' onChange={this.onChangeEmail} />
            </div>
            <div className='form-group'>
              <label className='pull-left'>Message:</label>
              <textarea rows='10' cols='50' className='form-control' required='true' placeholder='Your message please' onChange={this.onChangeMessage} />
            </div>
            <div className='form-group'>
              <input className='form-control btn btn-primary' type='submit' value='Send message' />
            </div>
          </form>
        </div>
      </div>
    );
  }
}
