import React from 'react';

class GoogleAuth extends React.Component {
  componentDidMount() {
    window.gapi.load('client:auth2', () => {
      window.gapi.client.init({
        clientId: '779352453175-t29nj33tq44bh1rhs5ceadorapp34lit.apps.googleusercontent.com',
        scope: 'email'
      }).then(() => {
        this.auth = window.gapi.auth2.getAuthInstance();
        this.setState({isSignedIn: this.auth.isSignedIn.get()})
      })
    })
  }

  render() {
    return <div>Google-Auth</div>
  }
}

export default GoogleAuth;