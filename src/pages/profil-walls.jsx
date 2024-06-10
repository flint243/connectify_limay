import React from "react"
import withSignOut from 'react-auth-kit/hoc/withSignOut';

class signOutComponent extends React.Component {

    render(){
        return (
            <button onClick={() => this.props.signOut()}>Sign Out</button>
        )
    }
}

export default withSignIn(signOutComponent)