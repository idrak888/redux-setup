import React, { Component } from 'react';
import { connect } from 'react-redux';

class Container2 extends Component {
    render() {
        return (
            <div className="Container2">
                {this.props.text}
            </div>
        );
    }
}
const mapStateToProps = state => {
    return {
        text:state.text
    }
}

export default connect(mapStateToProps)(Container2);