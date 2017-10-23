import React, { Component } from 'react';

export class Admin extends Component {
  constructor () {
    super();

    /*
    Saving in the state messages sent to webmaster.
    They are fetched from back-end.
    */

    this.state = {
      messages: []
    };
  }

  componentDidMount () {
     /* Fetching all messages sent to webmaster from back-end */
    console.log('Admin component has mounted successfully');
    fetch('/ContactInfo', {
      method: 'GET'
    })
      .then((res) => {
        if (res.ok) {
          console.log(res.status);
          return res.json();
        } else {
          console.log(`We couldn\'t fetch the data from server. ${res.status}`);
        }
      })
      .then((data) => {
        this.setState(prevState => {
          return {
            messages: prevState.messages.concat(data)
          };
        });
        console.log(data);
      })
      .catch(err => {
        console.log(`error: ${err}`);
      });
  }
  render () {

    let { messages } = this.state;

  {/*Conditionaly rendering component depending on
     whether there are any messages stored in back-end or not
  */}

    if (messages.length === 0) {
      return (
        <div>
          <h2>Admin page</h2>
          <h4>You didn't receive any messages :(</h4>
        </div>
      );
    }
    return (
      <div>
        <h2>Admin page</h2>
        {messages.map((message, index) => {
          return (
            <div className='table-responsive'>
              <table className='table table-condensed' style={{width: '35%', margin: '50px auto'}}>
                <tr />
                <tr>
                  <td><strong>Full Name:</strong></td>
                  <td>{message.name}</td>
                </tr>
                <tr>
                  <td><strong>Email:</strong></td>
                  <td>{message.email}</td>
                </tr>
                <tr>
                  <td><strong>Message:</strong></td>
                  <td>{message.message}</td>
                </tr>
              </table>
            </div>
          );
        })}
      </div>
    );
  }
}
