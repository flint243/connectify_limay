import React from 'react';
import withAuthUser from 'react-auth-kit/hoc/withAuthUser';

class SomeComponent extends React.Component {
    render(){
        return (
            <div>
                Hello {this.props.authState.user}
            </div>
        )
    }
}

export default withAuthUser(SomeComponent)